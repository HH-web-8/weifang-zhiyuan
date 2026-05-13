#!/bin/bash
# 潍坊中高考志愿规划网站 - Cloudflare Tunnel部署脚本
# 运行此脚本启动网站

echo "🚀 启动潍坊中高考志愿规划网站..."

# 检查cloudflared
if ! command -v cloudflared &> /dev/null; then
    echo "安装cloudflared..."
    curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /tmp/cloudflared
    chmod +x /tmp/cloudflared
    alias cloudflared=/tmp/cloudflared
fi

# 启动HTTP服务器
echo "启动HTTP服务器..."
python3 -m http.server 8080 &
SERVER_PID=$!

sleep 2

# 启动Cloudflare Tunnel
echo "启动Cloudflare Tunnel..."
cloudflared tunnel --url http://localhost:8080

# 清理
kill $SERVER_PID 2>/dev/null

import { NextRequest, NextResponse } from 'next/server';

// 后端 API 基础 URL
const API_BASE = 'https://gkqtkozfuacdkqfa5x6ppif4nm0iutee.lambda-url.us-west-2.on.aws/api';

export async function GET(req: NextRequest, { params }: { params: { proxyPath: string[] } }) {
  return proxyRequest(req, params);
}

export async function POST(req: NextRequest, { params }: { params: { proxyPath: string[] } }) {
  return proxyRequest(req, params);
}

export async function PUT(req: NextRequest, { params }: { params: { proxyPath: string[] } }) {
  return proxyRequest(req, params);
}

export async function DELETE(req: NextRequest, { params }: { params: { proxyPath: string[] } }) {
  return proxyRequest(req, params);
}

async function proxyRequest(req: NextRequest, params: { proxyPath: string[] }) {
  try {
    // 验证参数
    if (!params || !params.proxyPath || !Array.isArray(params.proxyPath)) {
      console.error('无效的路由参数:', params);
      return new NextResponse(
        JSON.stringify({ error: '无效的路由参数', details: 'proxyPath 未定义或不是数组' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // 构建目标 URL
    const targetUrl = `${API_BASE}/${params.proxyPath.join('/')}`;
    console.log('代理请求至:', targetUrl);
    console.log('请求方法:', req.method);

    // 复制请求头部
    const headers = new Headers(req.headers);
    // 设置 host 头部以匹配后端
    headers.set('host', new URL(API_BASE).host);
    // 确保 Content-Type 为 JSON（如果有负载）
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      headers.set('Content-Type', 'application/json');
    }

    // 记录请求头部
    console.log('请求头部:', Object.fromEntries(headers));

    // 获取请求体
    let body: string | undefined;
    if (['GET', 'HEAD'].includes(req.method)) {
      body = undefined;
    } else {
      body = await req.text();
      console.log('请求体:', body);
    }

    // 传递查询参数
    const url = new URL(targetUrl);
    url.search = req.nextUrl.search;

    // 准备 fetch 选项
    const fetchOptions: RequestInit = {
      method: req.method,
      headers,
      body,
    };

    // 发送代理请求
    const response = await fetch(url, fetchOptions);

    // 记录响应信息
    console.log('响应状态:', response.status);
    console.log('响应头部:', Object.fromEntries(response.headers));
    const responseBody = await response.text();
    console.log('响应体:', responseBody);

    // 设置响应头部
    const resHeaders = new Headers(response.headers);
    resHeaders.set('Access-Control-Allow-Origin', '*');
    resHeaders.set('Access-Control-Allow-Headers', '*');
    resHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    // 返回响应
    return new NextResponse(responseBody, {
      status: response.status,
      headers: resHeaders,
    });
  } catch (error) {
    console.error('代理错误:', error);
    return new NextResponse(
      JSON.stringify({ error: '代理请求失败', details: (error as Error).message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
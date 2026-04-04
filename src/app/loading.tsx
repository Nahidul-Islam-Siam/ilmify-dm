// app/dashboard/loading.tsx
"use client";

import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin size="large" tip="Loading...">
        <div className="h-12 w-24" />
      </Spin>
    </div>
  );
};

export default Loading;

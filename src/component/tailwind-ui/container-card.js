import React from 'react';

export default function ContainerCard() {
    return (
        <div className="card bg-white p-4 rounded-lg shadow-lg container-card mt-2">
            <div className="card-content flex flex-col items-center gap-4">
           
            <img className="w-20 h-20 rounded-full" src="https://i.pravatar.cc/100" alt="头像"/>
            <div>
                <h2 className="text-xl font-semibold">Tailwind 容器查询</h2>
                <p className="text-gray-600">这个 Card 会根据父容器的宽度动态调整布局！</p>
            </div>
            </div>
        </div>
    );
}
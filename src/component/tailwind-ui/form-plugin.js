import React from "react";
export default function FormPlugin() {
    return (
        <>
        <form className="space-y-6 max-w-3xl min-w-lg mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
                <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-2 border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="请输入姓名"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">邮箱</label>
                <input
                type="email"
                id="email"
                name="email"
                className="form-input w-full"
                placeholder="请输入邮箱"
                />
            </div>

            <div>
                <label htmlFor="password" className="form-label">密码</label>
                <input
                type="password"
                id="password"
                name="password"
                className="form-password w-full"
                placeholder="请输入密码"
                />
            </div>
            <div>
            <label htmlFor="message" className="form-label">留言</label>
            <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea w-full"
                placeholder="请输入留言"
            ></textarea>
            </div>
            <div>
            <label htmlFor="country" className="form-label">选择国家</label>
            <select
                id="country"
                name="country"
                className="form-select w-full"
            >
                <option>中国</option>
                <option>美国</option>
                <option>日本</option>
            </select>
            </div>
            <div>
                <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                提交
                </button>
            </div>
        </form>
        </>
    )
}
import React from "react";
import { updateUser } from '../../lib/store'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(updateUser({ 
            id: '1', 
            name: 'robin', 
            permissions: ['analyze'],
            roles: ['admin'],
            }
        ));
        navigate('/');
    };
    return (
        <div className="flex items-center justify-center min-h-screen" style={{backgroundColor : 'var(--color-moon-white)'}}>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700">登录</h2>
                
                <form className="mt-4" onSubmit={ handleLogin }>
                <div>
                    <label className="block text-sm font-medium text-gray-700">用户名</label>
                    <input type="text" placeholder="请输入用户名" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-100 focus:outline-none" />
                </div>
                
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">密码</label>
                    <input type="password" placeholder="请输入密码" className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-100 focus:outline-none" />
                </div>
                
                <button type="submit" className="w-full px-4 py-2 mt-6 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                    登录
                </button>
                </form>
            </div>
        </div>
    )

}
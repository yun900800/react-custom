import React from "react";

export default function ResponseMarket() {
    return (
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-gray-50 shadow-md md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src="http://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
                        alt="欢乐小奶狗"
                    />
                </div>
                <div className="p-8">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                    <a href="/" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                        Incredible accommodation for your team
                    </a>
                    <p className="mt-2 text-gray-500">
                        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                        places to do just that.
                    </p>
                </div>
            </div>
        </div>
    );
}
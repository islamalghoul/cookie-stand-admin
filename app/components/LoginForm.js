import React, { useState,useContext } from "react";
import {AuthContext} from './context/auth'

export default function LoginForm() {
    const {login} = useContext(AuthContext);

    let handelSubmit=(e)=>{
        e.preventDefault()
      
        login({
          username:e.target.username.value,
          password:e.target.password.value,
        })


    }
  return (
    <div className="relative flex h-full w-full">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div className="mt-10">
            <form onSubmit={handelSubmit}>
              <div>
                <label className="mb-2.5 block font-extrabold" >
                  Email
                </label>
                <input
                  type="username"
                  name="username"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                  placeholder="username"
                />
              </div>
              <div className="mt-4">
                <label className="mb-2.5 block font-extrabold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                />
              </div>
            
              <div className="my-10">
                <button className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
}

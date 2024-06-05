import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [site, setSite] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        if (site) navigate(`/${site}`)
        else navigate(`/`)
    },[site, navigate])

    return ( 
        <div className="navbar bg-slate-900 text-slate-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
                <li>
                    <a href="#" onClick={()=>{setSite('Bible')}}>
                        Bible
                    </a>
                </li>
                <li>
                    <a>Forum</a>
                    <ul className="p-2">
                        <li>
                            <a href="#" onClick={()=>{setSite('Forum')}}>
                                Panel
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={()=>{setSite('Forum/Hightlights')}}>
                                Highlights
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" onClick={()=>{setSite('Preachings')}}>
                        Preachings
                    </a>
                </li>
                <li>
                    <a href="#" onClick={()=>{setSite('About')}}>
                        About
                    </a>
                </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost text-xl" onClick={()=>{setSite('')}}>Meet Bible</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <a href="#"onClick={()=>{
                    setSite('Bible')
                }}>
                    Bible
                </a>
            </li>
            <li>
              <details>
                <summary>
                    Forum
                </summary>
                <ul className="p-2 bg-slate-900">
                    <li>
                        <a href="#" onClick={()=>{setSite('Forum')}}>
                            Panel
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>{setSite('Forum/Hightlights')}}>
                            Highlights
                        </a>
                    </li>
                </ul>
              </details>
            </li>
            <li>
                <a href="#" onClick={()=>{setSite('Preachings')}}>
                    Preachings
                </a>
            </li>
            <li>
                <a href="#" onClick={()=>{setSite('About')}}>
                    About
                </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a 
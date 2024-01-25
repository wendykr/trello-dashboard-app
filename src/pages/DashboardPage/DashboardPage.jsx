import React from 'react';
import { LinkMore } from '../../components/LinkMore/LinkMore';
import { AddCard } from '../../components/AddCard/AddCard';
import { LinkCopy } from '../../components/LinkCopy/LinkCopy';

export const DashboardPage = () => {

  return (
    <main className="flex bg-gradient-to-br from-[#228cd5] via-[#228cd5] to-[#37B4C3]">
      <div className="w-screen h-screen px-10 sm:px-4 py-10 overflow-x-auto sm:flex items-start ">
        {/* CARD */}
        <section className="flex flex-col max-h-full mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0 gap-0.5">
          {/* HEADER */}
          <div className="mx-1 flex flex-row justify-between items-center gap-1">
            <h3
              className="pl-2 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none outline-none cursor-pointer flex-grow"
              > NÁZEV
            </h3>
            <LinkMore />
          </div>

          {/* CONTAINER */}
          <div className="h-full overflow-x-hidden overflow-y-auto">
            <ul>
              <li className="relative z-20 mx-1 my-2 p-4 bg-white text-[#1d284c] leading-snug cursor-pointer hover:outline hover:outline-2 hover:outline-[#5881fd] rounded-lg shadow-[0_1px_0px_rgba(9,30,66,0.3)]"> TEXT
                {/* POPUP */}
                <ul id="popup"
                  className="ml-2 sm:ml-[-20px] w-40 text-sm text-white font-semibold flex flex-col gap-2 sm:absolute top-0 left-80">
                  <li className="flex">
                    <a href="#"
                      className="px-3 py-2 bg-black bg-opacity-60 hover:bg-opacity-100 rounded-[3px] flex flex-row gap-2 items-center"><svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path d="M17.534,10.458l-3.587-6.917c-0.088-0.168-0.262-0.275-0.452-0.275H6.571c-0.189,0-0.363,0.107-0.452,0.275L2.775,9.989c-0.081,0.134-0.159,0.261-0.211,0.409l-0.031,0.06c-0.027,0.05-0.006,0.104-0.014,0.157c-0.044,0.178-0.109,0.348-0.109,0.537v3.293c0,1.262,1.028,2.289,2.29,2.289h10.603c1.262,0,2.288-1.027,2.288-2.289v-3.293c0-0.097-0.043-0.178-0.055-0.271C17.594,10.747,17.607,10.597,17.534,10.458z M6.88,4.284h6.306l2.405,4.639c-0.1-0.013-0.188-0.059-0.289-0.059h-2.354c-0.27,0-0.491,0.208-0.508,0.477c-0.082,1.292-1.154,2.305-2.441,2.305c-1.287,0-2.359-1.013-2.44-2.305C7.542,9.073,7.32,8.865,7.052,8.865H4.7c-0.077,0-0.142,0.037-0.217,0.043L6.88,4.284zM16.573,14.445c0,0.7-0.57,1.271-1.271,1.271H4.7c-0.701,0-1.271-0.571-1.271-1.271v-3.293c0-0.122,0.038-0.231,0.07-0.343l0.235-0.455C3.966,10.073,4.306,9.882,4.7,9.882h1.907c0.324,1.595,1.732,2.782,3.394,2.782c1.66,0,3.07-1.188,3.394-2.782h1.909c0.7,0,1.271,0.57,1.271,1.271V14.445z"> TEXT </path>
                    </svg> </a>
                  </li>
                  <li className="flex">
                    <a href="#"
                      className="px-3 py-2 bg-black bg-opacity-60 hover:bg-opacity-100 rounded-[3px] flex flex-row gap-2 items-center"><svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path d="M9.634,10.633c0.116,0.113,0.265,0.168,0.414,0.168c0.153,0,0.308-0.06,0.422-0.177l4.015-4.111c0.229-0.235,0.225-0.608-0.009-0.836c-0.232-0.229-0.606-0.222-0.836,0.009l-3.604,3.689L6.35,5.772C6.115,5.543,5.744,5.55,5.514,5.781C5.285,6.015,5.29,6.39,5.522,6.617L9.634,10.633z"></path>
                      <path d="M17.737,9.815c-0.327,0-0.592,0.265-0.592,0.591v2.903H2.855v-2.903c0-0.327-0.264-0.591-0.591-0.591c-0.327,0-0.591,0.265-0.591,0.591V13.9c0,0.328,0.264,0.592,0.591,0.592h15.473c0.327,0,0.591-0.264,0.591-0.592v-3.494C18.328,10.08,18.064,9.815,17.737,9.815z"> TEXT </path>
                    </svg></a>
                  </li>
                  <li className="flex">
                    <a href="#"
                      className="px-3 py-2 bg-black bg-opacity-60 hover:bg-opacity-100 rounded-[3px] flex flex-row gap-2 items-center"><svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                      <path d="M9.634,10.633c0.116,0.113,0.265,0.168,0.414,0.168c0.153,0,0.308-0.06,0.422-0.177l4.015-4.111c0.229-0.235,0.225-0.608-0.009-0.836c-0.232-0.229-0.606-0.222-0.836,0.009l-3.604,3.689L6.35,5.772C6.115,5.543,5.744,5.55,5.514,5.781C5.285,6.015,5.29,6.39,5.522,6.617L9.634,10.633z"></path>
                      <path d="M17.737,9.815c-0.327,0-0.592,0.265-0.592,0.591v2.903H2.855v-2.903c0-0.327-0.264-0.591-0.591-0.591c-0.327,0-0.591,0.265-0.591,0.591V13.9c0,0.328,0.264,0.592,0.591,0.592h15.473c0.327,0,0.591-0.264,0.591-0.592v-3.494C18.328,10.08,18.064,9.815,17.737,9.815z"> TEXT </path>
                    </svg></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* FOOTER */}
          <div className="flex flex-row mx-1">
            <AddCard/>
            <LinkCopy />
          </div>

        </section>
      </div>
    </main>
  )
}
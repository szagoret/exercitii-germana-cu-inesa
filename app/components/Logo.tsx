import {useMemo} from "react";

export const Logo = () =>
    useMemo(() => <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 45 45"
             stroke="currentColor">
            <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
            <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M8 42H32C33.1046 42 34 41.1046 34 40V8C34 6.89543 33.1046 6 32 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42ZM32 44H8C5.79086 44 4 42.2091 4 40V8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V40C36 42.2091 34.2091 44 32 44Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18 13C18 12.4477 18.4477 12 19 12H31C31.5523 12 32 12.4477 32 13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18 17C18 16.4477 18.4477 16 19 16H31C31.5523 16 32 16.4477 32 17C32 17.5523 31.5523 18 31 18H19C18.4477 18 18 17.5523 18 17Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18 25C18 24.4477 18.4477 24 19 24H31C31.5523 24 32 24.4477 32 25C32 25.5523 31.5523 26 31 26H19C18.4477 26 18 25.5523 18 25Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M18 29C18 28.4477 18.4477 28 19 28H31C31.5523 28 32 28.4477 32 29C32 29.5523 31.5523 30 31 30H19C18.4477 30 18 29.5523 18 29Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10 26V29H13V26H10ZM9 24H14C14.5523 24 15 24.4477 15 25V30C15 30.5523 14.5523 31 14 31H9C8.44772 31 8 30.5523 8 30V25C8 24.4477 8.44772 24 9 24Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L11 18.4142L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929L11 15.5858L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M42 24H40V39.3333L41 40.6667L42 39.3333V24ZM44 40L41 44L38 40V22H44V40Z"
                      fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M42 17H40V19H42V17ZM40 15H42C43.1046 15 44 15.8954 44 17V21H38V17C38 15.8954 38.8954 15 40 15Z"
                      fill="#333333"/>
            </g>
        </svg>
    </label>, []);
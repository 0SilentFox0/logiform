import styles from './HeaderUnion.module.css'

function HeaderUnion() {
    return (
        <svg className={styles.union} xmlns="http://www.w3.org/2000/svg" width="1213" height="73" viewBox="0 0 1213 73" fill="none">
            <g filter="url(#filter0_dd_478_1046)">
                <path fillRule="evenodd" clipRule="evenodd" d="M202.483 28.1057C209.377 28.1057 215.138 23.2049 219.587 17.9389C224.724 11.8602 232.403 8 240.984 8H959.38C967.656 8 975.093 11.5904 980.219 17.2985C985.162 22.8025 991.334 28.1057 998.732 28.1057C1006.1 28.1057 1012.26 22.8361 1017.2 17.3606C1022.32 11.6778 1029.75 8.10574 1038 8.10574H1177C1192.46 8.10574 1205 20.6418 1205 36.1057C1205 51.5697 1192.46 64.1057 1177 64.1057H1038C1029.78 64.1057 1022.38 60.5595 1017.26 54.9126C1012.27 49.4151 1006.07 44.1057 998.648 44.1057C991.251 44.1057 985.067 49.3813 980.085 54.8501C974.964 60.4719 967.584 64 959.38 64H240.984C232.476 64 224.855 60.2054 219.72 54.2164C215.231 48.9817 209.458 44.1057 202.562 44.1057C195.644 44.1057 189.857 49.0129 185.365 54.2749C180.23 60.2912 172.59 64.1057 164.06 64.1057H36C20.536 64.1057 8 51.5697 8 36.1057C8 20.6418 20.536 8.10574 36 8.10574H164.06C172.619 8.10574 180.281 11.9459 185.417 17.9972C189.863 23.2359 195.611 28.1057 202.483 28.1057Z" fill="white" />
            </g>
            <defs>
                <filter id="filter0_dd_478_1046" x="0" y="0" width="1213" height="72.1057" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.615686 0 0 0 0 0.886275 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_478_1046" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.615686 0 0 0 0 0.886275 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_478_1046" result="effect2_dropShadow_478_1046" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_478_1046" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default HeaderUnion

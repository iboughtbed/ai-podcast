export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: ({ ...props }: IconProps) => (
    <svg
      width="66"
      height="13"
      viewBox="0 0 66 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.184 0.639999H4.728C6.08267 0.639999 7.14933 0.970666 7.928 1.632C8.70667 2.29333 9.096 3.2 9.096 4.352C9.096 5.504 8.70667 6.416 7.928 7.088C7.14933 7.74933 6.08267 8.08 4.728 8.08H2.616V12H0.184V0.639999ZM4.584 6.032C5.23467 6.032 5.73067 5.888 6.072 5.6C6.424 5.312 6.6 4.896 6.6 4.352C6.6 3.808 6.424 3.39733 6.072 3.12C5.73067 2.832 5.23467 2.688 4.584 2.688H2.616V6.032H4.584ZM13.1633 12.192C12.2566 12.192 11.5259 11.984 10.9713 11.568C10.4273 11.152 10.1553 10.5813 10.1553 9.856C10.1553 9.12 10.3846 8.544 10.8433 8.128C11.3019 7.70133 12.0113 7.392 12.9713 7.2L15.7393 6.656C15.7393 5.536 15.2486 4.976 14.2673 4.976C13.3819 4.976 12.8593 5.38667 12.6993 6.208L10.2993 6.096C10.4593 5.15733 10.8806 4.448 11.5633 3.968C12.2459 3.47733 13.1473 3.232 14.2673 3.232C15.5473 3.232 16.5126 3.536 17.1633 4.144C17.8139 4.752 18.1393 5.64267 18.1393 6.816V9.744C18.1393 9.97867 18.1766 10.1387 18.2513 10.224C18.3259 10.3093 18.4486 10.352 18.6193 10.352H18.8593V12C18.6459 12.064 18.3579 12.096 17.9953 12.096C16.9286 12.096 16.3046 11.632 16.1233 10.704C15.8993 11.1627 15.5259 11.5253 15.0033 11.792C14.4913 12.0587 13.8779 12.192 13.1633 12.192ZM13.7393 10.544C14.3473 10.544 14.8326 10.368 15.1953 10.016C15.5579 9.664 15.7393 9.184 15.7393 8.576V8.16L13.7873 8.576C13.0086 8.736 12.6193 9.088 12.6193 9.632C12.6193 9.92 12.7153 10.144 12.9073 10.304C13.0993 10.464 13.3766 10.544 13.7393 10.544ZM20.3216 3.424H22.5936L22.6416 5.152C22.8123 4.544 23.063 4.10667 23.3936 3.84C23.7243 3.56267 24.1563 3.424 24.6896 3.424H25.4736V5.408H24.6896C24.007 5.408 23.5056 5.54667 23.1856 5.824C22.8763 6.10133 22.7216 6.55467 22.7216 7.184V12H20.3216V3.424ZM29.3976 12.192C28.491 12.192 27.7603 11.984 27.2056 11.568C26.6616 11.152 26.3896 10.5813 26.3896 9.856C26.3896 9.12 26.619 8.544 27.0776 8.128C27.5363 7.70133 28.2456 7.392 29.2056 7.2L31.9736 6.656C31.9736 5.536 31.483 4.976 30.5016 4.976C29.6163 4.976 29.0936 5.38667 28.9336 6.208L26.5336 6.096C26.6936 5.15733 27.115 4.448 27.7976 3.968C28.4803 3.47733 29.3816 3.232 30.5016 3.232C31.7816 3.232 32.747 3.536 33.3976 4.144C34.0483 4.752 34.3736 5.64267 34.3736 6.816V9.744C34.3736 9.97867 34.411 10.1387 34.4856 10.224C34.5603 10.3093 34.683 10.352 34.8536 10.352H35.0936V12C34.8803 12.064 34.5923 12.096 34.2296 12.096C33.163 12.096 32.539 11.632 32.3576 10.704C32.1336 11.1627 31.7603 11.5253 31.2376 11.792C30.7256 12.0587 30.1123 12.192 29.3976 12.192ZM29.9736 10.544C30.5816 10.544 31.067 10.368 31.4296 10.016C31.7923 9.664 31.9736 9.184 31.9736 8.576V8.16L30.0216 8.576C29.243 8.736 28.8536 9.088 28.8536 9.632C28.8536 9.92 28.9496 10.144 29.1416 10.304C29.3336 10.464 29.611 10.544 29.9736 10.544ZM38.6866 12C37.1933 12 36.4466 11.2533 36.4466 9.76V0.639999H38.8466V9.504C38.8466 9.74933 38.9 9.93067 39.0066 10.048C39.124 10.1547 39.3 10.208 39.5346 10.208H40.1106V12H38.6866ZM43.7804 12C42.287 12 41.5404 11.2533 41.5404 9.76V0.639999H43.9404V9.504C43.9404 9.74933 43.9937 9.93067 44.1004 10.048C44.2177 10.1547 44.3937 10.208 44.6284 10.208H45.2044V12H43.7804ZM49.3351 12.192C48.4285 12.192 47.6978 11.984 47.1431 11.568C46.5991 11.152 46.3271 10.5813 46.3271 9.856C46.3271 9.12 46.5565 8.544 47.0151 8.128C47.4738 7.70133 48.1831 7.392 49.1431 7.2L51.9111 6.656C51.9111 5.536 51.4205 4.976 50.4391 4.976C49.5538 4.976 49.0311 5.38667 48.8711 6.208L46.4711 6.096C46.6311 5.15733 47.0525 4.448 47.7351 3.968C48.4178 3.47733 49.3191 3.232 50.4391 3.232C51.7191 3.232 52.6845 3.536 53.3351 4.144C53.9858 4.752 54.3111 5.64267 54.3111 6.816V9.744C54.3111 9.97867 54.3485 10.1387 54.4231 10.224C54.4978 10.3093 54.6205 10.352 54.7911 10.352H55.0311V12C54.8178 12.064 54.5298 12.096 54.1671 12.096C53.1005 12.096 52.4765 11.632 52.2951 10.704C52.0711 11.1627 51.6978 11.5253 51.1751 11.792C50.6631 12.0587 50.0498 12.192 49.3351 12.192ZM49.9111 10.544C50.5191 10.544 51.0045 10.368 51.3671 10.016C51.7298 9.664 51.9111 9.184 51.9111 8.576V8.16L49.9591 8.576C49.1805 8.736 48.7911 9.088 48.7911 9.632C48.7911 9.92 48.8871 10.144 49.0791 10.304C49.2711 10.464 49.5485 10.544 49.9111 10.544ZM59.2764 7.648L56.3164 3.424H58.8604L60.6844 6.176L62.4764 3.424H65.0684L62.1084 7.664L65.1644 12H62.6044L60.7324 9.088L58.8284 12H56.2204L59.2764 7.648Z"
        fill="currentColor"
      />
    </svg>
  ),
  parallax: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="1536.000000pt"
      height="1536.000000pt"
      viewBox="0 0 1536.000000 1536.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,1536.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M6855 10373 c-23 -6 -62 -39 -76 -65 -6 -11 -10 -977 -9 -2525 0 -1380 0 -2579 0 -2667 l0 -158 40 -40 c40 -40 41 -40 101 -36 56 4 65 8 95 41 26 28 34 46 35 74 0 21 1 1218 1 2659 0 2544 0 2623 -18 2654 -34 57 -96 80 -169 63z" />
        <path d="M7756 9459 c-60 -47 -57 22 -57 -1179 l-1 -1101 27 -34 c51 -68 110 -81 175 -40 76 48 71 -42 70 1186 l0 1102 -26 34 c-14 19 -37 38 -51 44 -43 16 -108 11 -137 -12z" />
        <path d="M5912 9400 c-20 -13 -41 -38 -53 -65 -19 -43 -19 -77 -17 -1887 3 -1758 4 -1845 21 -1871 28 -43 75 -67 131 -67 43 0 53 4 87 39 l39 39 0 1868 c0 1836 0 1870 -20 1901 -37 62 -124 82 -188 43z" />
        <path d="M9655 9337 c-26 -8 -47 -24 -62 -46 l-23 -34 0 -1679 0 -1680 33 -33 c65 -65 173 -54 225 25 l23 34 -5 1660 c-5 1590 -6 1661 -24 1695 -30 57 -96 80 -167 58z" />
        <path d="M10553 8925 c-65 -28 -61 55 -64 -1330 -3 -1162 -2 -1262 13 -1291 47 -87 201 -82 249 8 6 11 9 513 9 1275 0 1184 -1 1258 -18 1287 -34 59 -119 82 -189 51z" />
        <path d="M4042 8818 c-20 -15 -36 -38 -44 -63 -17 -55 -15 -2269 2 -2320 30 -90 162 -112 231 -39 l24 26 3 1159 c3 1288 7 1210 -63 1243 -49 23 -114 20 -153 -6z" />
        <path d="M4994 8540 c-26 -10 -72 -65 -79 -93 -3 -12 -4 -460 -3 -994 l3 -973 36 -36 c65 -65 172 -55 219 21 20 32 20 47 20 1003 0 647 -3 980 -10 998 -26 67 -116 103 -186 74z" />
        <path d="M8694 8401 c-66 -40 -63 7 -58 -961 4 -803 6 -877 22 -904 20 -34 75 -66 113 -66 44 0 98 29 119 63 20 31 20 51 18 917 -3 867 -3 886 -23 912 -42 57 -132 75 -191 39z" />
        <path d="M3123 8260 c-12 -5 -31 -27 -43 -49 -19 -39 -20 -56 -20 -593 0 -534 1 -554 20 -586 25 -40 75 -72 115 -72 40 0 94 28 119 62 19 27 19 43 18 595 -1 380 -5 576 -12 593 -16 39 -60 60 -122 59 -29 0 -63 -4 -75 -9z" />
        <path d="M11497 8118 c-29 -8 -43 -20 -62 -52 l-25 -43 0 -397 c0 -429 1 -436 54 -486 23 -20 37 -25 86 -25 49 0 63 5 86 25 53 49 54 58 54 482 0 354 -2 396 -18 427 -32 63 -98 89 -175 69z" />
        <path d="M2214 7751 c-33 -14 -83 -78 -89 -115 -19 -97 60 -196 155 -196 43 0 104 33 132 72 44 63 24 174 -40 223 -29 21 -123 31 -158 16z" />
        <path d="M12385 7748 c-87 -44 -107 -191 -34 -259 32 -30 116 -54 151 -44 130 40 160 216 49 291 -28 19 -48 24 -91 23 -30 0 -64 -5 -75 -11z" />
        <path d="M13232 7735 c-39 -32 -62 -83 -62 -135 0 -50 19 -89 60 -124 26 -21 42 -26 89 -26 97 0 161 65 161 163 0 85 -70 147 -167 147 -40 0 -58 -5 -81 -25z" />
      </g>
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  spotify: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path
        fill="#1ed760"
        d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
      />
      <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9c5af2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
      <path d="M8 14a5 5 0 1 1 8 0" />
      <circle cx="12" cy="11" r="1" />
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
    </svg>
  ),
  externalLink: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  ),
  link: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  rss: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  ),
  bot: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  terminal: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  ),
  send: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  slash: (props: IconProps) => (
    <svg
      viewBox="0 0 10 10"
      fill="currentColor"
      className="mx-1 h-2.5 w-2.5 flex-none stroke-current"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.25 1.75-2.5 6.5"
      ></path>
    </svg>
  ),
};

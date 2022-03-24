import React, { SVGProps } from 'react'

export default function SettingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.2119 10.0354L18.2725 9.719C18.2041 9.53053 18.1283 9.34694 18.0449 9.16822L19.1914 7.58622C19.3501 7.38416 19.4309 7.13186 19.4193 6.87522C19.4076 6.61857 19.3043 6.37464 19.1279 6.18778L17.8115 4.87231C17.6257 4.6959 17.3828 4.59199 17.1269 4.57945C16.871 4.56692 16.6191 4.64659 16.417 4.804L14.8232 5.95142C14.6445 5.86842 14.4609 5.79224 14.2715 5.72485L13.9648 3.79321C13.9337 3.53847 13.8124 3.30329 13.6229 3.13025C13.4334 2.9572 13.1882 2.85774 12.9316 2.84985H11.0674C10.8118 2.85783 10.5674 2.95672 10.3782 3.12874C10.189 3.30077 10.0674 3.53465 10.0352 3.78833L9.71875 5.72778C9.5332 5.79517 9.35156 5.86938 9.17575 5.95142L7.58105 4.804C7.37929 4.64729 7.12816 4.56786 6.87298 4.58003C6.6178 4.59221 6.37537 4.69519 6.18945 4.8704L4.87012 6.18774C4.69425 6.37464 4.59116 6.61835 4.57951 6.87472C4.56787 7.13109 4.64844 7.38314 4.80664 7.58521L5.95508 9.16921C5.87207 9.34695 5.79623 9.53021 5.72754 9.71901L3.78809 10.0354C3.5344 10.0676 3.30052 10.1893 3.1285 10.3785C2.95647 10.5677 2.85758 10.8121 2.84961 11.0677V12.9329C2.85758 13.1885 2.95647 13.4329 3.1285 13.6221C3.30052 13.8113 3.5344 13.9329 3.78809 13.9651L5.72754 14.2805C5.79492 14.4661 5.86914 14.6477 5.95117 14.8235L4.80566 16.4163C4.64775 16.618 4.56741 16.8696 4.57924 17.1255C4.59107 17.3814 4.69428 17.6245 4.87012 17.8108L6.18945 19.1301C6.376 19.305 6.61877 19.4076 6.87417 19.4196C7.12958 19.4316 7.38089 19.3522 7.58301 19.1956L9.17676 18.0491C9.35254 18.1311 9.53321 18.2056 9.71876 18.2727L10.0352 20.2112C10.0673 20.465 10.1889 20.699 10.3781 20.8712C10.5673 21.0434 10.8117 21.1425 11.0674 21.1506H12.9326C13.1883 21.1425 13.4327 21.0434 13.6219 20.8712C13.8111 20.699 13.9327 20.465 13.9648 20.2112L14.2813 18.2727C14.4668 18.2053 14.6475 18.1308 14.8233 18.0491L16.4151 19.1946C16.6169 19.3522 16.8685 19.4323 17.1243 19.4205C17.3801 19.4087 17.6232 19.3057 17.8096 19.1301L19.1289 17.8108C19.304 17.6243 19.4067 17.3815 19.4187 17.1261C19.4307 16.8706 19.3512 16.6193 19.1944 16.4172L18.0479 14.8245C18.1309 14.6448 18.2067 14.4605 18.2754 14.2717L20.21 13.9641C20.4641 13.932 20.6983 13.8103 20.8707 13.6209C21.0431 13.4315 21.1423 13.1869 21.1504 12.9309V11.0676C21.1425 10.812 21.0436 10.5676 20.8716 10.3784C20.6995 10.1892 20.4656 10.0676 20.2119 10.0354ZM19.8496 12.7053L17.6797 13.0501C17.5582 13.0693 17.4447 13.1225 17.3523 13.2035C17.2598 13.2846 17.1922 13.3902 17.1572 13.5081C17.0498 13.8775 16.9031 14.2343 16.7197 14.5725C16.6609 14.68 16.6337 14.8021 16.6413 14.9244C16.6489 15.0468 16.691 15.1645 16.7627 15.2639L18.0488 17.051L17.0498 18.05L15.2627 16.7639C15.1631 16.6921 15.0453 16.65 14.9227 16.6424C14.8002 16.6348 14.6781 16.662 14.5703 16.7209C14.2362 16.9027 13.8836 17.0484 13.5186 17.1554C13.4013 17.1901 13.2962 17.2571 13.2153 17.3489C13.1345 17.4406 13.0812 17.5533 13.0616 17.674L12.7061 19.8498H11.294L10.9385 17.674C10.9189 17.5533 10.8656 17.4406 10.7848 17.3489C10.7039 17.2571 10.5988 17.1901 10.4815 17.1554C10.1165 17.0484 9.76391 16.9027 9.42977 16.7209C9.32212 16.6618 9.19991 16.6344 9.07734 16.642C8.95478 16.6497 8.83689 16.6919 8.73738 16.7639L6.94922 18.0501L5.95022 17.0511L7.23635 15.263C7.3081 15.1634 7.35021 15.0455 7.35782 14.923C7.36543 14.8005 7.33823 14.6783 7.27935 14.5706C7.0974 14.2362 6.95171 13.8832 6.84478 13.5178C6.81015 13.4006 6.74311 13.2955 6.65137 13.2146C6.55963 13.1338 6.44692 13.0805 6.32622 13.0608L4.15044 12.7073V11.2932L6.32622 10.9387C6.44692 10.9191 6.55963 10.8658 6.65137 10.785C6.74311 10.7041 6.81015 10.599 6.84478 10.4817C6.95233 10.1138 7.09932 9.7585 7.2832 9.42212C7.34256 9.31403 7.37003 9.19132 7.36241 9.06824C7.3548 8.94516 7.31242 8.82677 7.2402 8.72681L5.9502 6.94751L6.9482 5.94946L8.73633 7.23657C8.83594 7.3083 8.9538 7.3504 9.07631 7.35801C9.19882 7.36562 9.32099 7.33843 9.42871 7.27957C9.76314 7.09763 10.1161 6.95194 10.4814 6.845C10.5987 6.81038 10.7038 6.74333 10.7847 6.6516C10.8655 6.55986 10.9188 6.44715 10.9384 6.32645L11.293 4.15063H12.7051L13.0508 6.32153C13.0699 6.44306 13.1233 6.55663 13.2045 6.64897C13.2858 6.74132 13.3917 6.80862 13.5098 6.84302C13.8781 6.94968 14.2337 7.09605 14.5703 7.27954C14.6783 7.33768 14.8003 7.36446 14.9227 7.35686C15.045 7.34926 15.1628 7.30759 15.2627 7.23654L17.0508 5.94943L18.0488 6.94748L16.7588 8.7258C16.6866 8.82576 16.6442 8.94415 16.6366 9.06723C16.629 9.19031 16.6565 9.31302 16.7158 9.42111C16.8998 9.75758 17.0471 10.1128 17.1553 10.4807C17.1896 10.5982 17.2565 10.7037 17.3483 10.7847C17.44 10.8658 17.5529 10.9192 17.6738 10.9387L19.8496 11.2932V12.7053Z"
        fill="url(#paint0_linear_1136_473)"
      />
      <path
        d="M11.9998 8.69458C11.346 8.6946 10.7069 8.88849 10.1633 9.25172C9.61975 9.61495 9.19609 10.1312 8.94592 10.7352C8.69575 11.3392 8.63031 12.0039 8.75787 12.6451C8.88543 13.2863 9.20026 13.8753 9.66255 14.3375C10.1248 14.7998 10.7138 15.1146 11.355 15.2422C11.9963 15.3697 12.6609 15.3042 13.2649 15.054C13.8689 14.8038 14.3851 14.3802 14.7483 13.8366C15.1116 13.293 15.3054 12.6539 15.3054 12.0001C15.3044 11.1237 14.9558 10.2835 14.3361 9.66381C13.7164 9.04411 12.8762 8.69554 11.9998 8.69458ZM11.9998 14.0057C11.6031 14.0057 11.2154 13.888 10.8856 13.6676C10.5558 13.4473 10.2987 13.134 10.1469 12.7676C9.99514 12.4011 9.95543 11.9978 10.0328 11.6088C10.1102 11.2198 10.3012 10.8624 10.5817 10.582C10.8622 10.3015 11.2196 10.1105 11.6086 10.0331C11.9976 9.95572 12.4009 9.99544 12.7673 10.1472C13.1338 10.299 13.447 10.5561 13.6674 10.8859C13.8878 11.2157 14.0054 11.6035 14.0054 12.0001C14.0048 12.5319 13.7933 13.0416 13.4173 13.4176C13.0413 13.7936 12.5315 14.0051 11.9998 14.0057Z"
        fill="url(#paint1_linear_1136_473)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1136_473"
          x1="20.9848"
          y1="21.0205"
          x2="2.02343"
          y2="19.6527"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1136_473"
          x1="15.2456"
          y1="15.2586"
          x2="8.39588"
          y2="14.7645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#197ACF" />
          <stop offset="1" stopColor="#1A8DE9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
"use server";

export async function SocialMedia({ className }: { className?: string }) {
  const socialMedia = [
    {
      key: "discord",
      icon: DiscordIcon,
      href: "https://discord.com/users/214023784057798658",
    },
    { key: "telegram", icon: TelegramIcon, href: "https://t.me/alumag" },
    {
      key: "linkedin",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/aluma-gelbard/",
    },
    { key: "github", icon: GithubIcon, href: "https://github.com/alumag" },
    {
      key: "stackoverflow",
      icon: StackOverflowIcon,
      href: "https://stackoverflow.com/users/4504056/aluma-gelbard",
    },
    {
      key: "reddit",
      icon: RedditIcon,
      href: "https://www.reddit.com/user/lummie_g",
    },
    {
      key: "duolingo",
      icon: DuolingoIcon,
      href: "https://www.duolingo.com/profile/alumag",
    },
  ] as const;

  return (
    <div className={`flex justify-center sm:justify-end ${className ?? ""}`}>
      {socialMedia.map(({ icon: Icon, href, key }) => (
        <a href={href} key={key}>
          <Icon className="m-0.5 h-5 w-5 fill-app-purple hover:fill-app-pink sm:m-1.5 sm:h-7 sm:w-7" />
        </a>
      ))}
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
    </svg>
  );
}

function StackOverflowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M 19.03125 1.96875 L 17.09375 2.5 L 18.90625 9.25 L 20.84375 8.75 Z M 14.09375 4.0625 L 12.5625 5.34375 L 17.0625 10.71875 L 18.59375 9.4375 Z M 10.71875 7.53125 L 9.71875 9.25 L 15.78125 12.75 L 16.78125 11.03125 Z M 8.96875 11.125 L 8.4375 13.03125 L 15.21875 14.84375 L 15.71875 12.9375 Z M 8.1875 14.28125 L 8.03125 16.28125 L 15 16.875 L 15.1875 14.875 Z M 5 15 L 5 22 L 18 22 L 18 15 L 16 15 L 16 20 L 7 20 L 7 15 Z M 8 17 L 8 19 L 15 19 L 15 17 Z"></path>
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M 14 3 C 12.300781 3 11 4.414063 11 6 L 11 8.03125 C 8.882813 8.175781 6.976563 8.785156 5.4375 9.71875 C 4.878906 9.28125 4.21875 9.03125 3.5625 9.03125 C 2.835938 9.03125 2.128906 9.308594 1.625 9.875 C 0.667969 11.070313 0.753906 13.023438 2.09375 14.03125 C 2.03125 14.347656 2 14.667969 2 15 C 2 17.054688 3.242188 18.84375 5.0625 20.0625 C 6.882813 21.28125 9.320313 22 12 22 C 14.679688 22 17.117188 21.28125 18.9375 20.0625 C 20.757813 18.84375 22 17.054688 22 15 C 22 14.667969 21.9375 14.347656 21.875 14.03125 C 23.238281 12.945313 23.378906 11.003906 22.375 9.875 C 21.871094 9.308594 21.164063 9.03125 20.4375 9.03125 C 19.78125 9.03125 19.121094 9.28125 18.5625 9.71875 C 17.023438 8.785156 15.117188 8.175781 13 8.03125 L 13 6 C 13 5.386719 13.300781 5 14 5 C 14.320313 5 14.773438 5.171875 15.53125 5.4375 C 16.203125 5.671875 17.09375 5.914063 18.25 5.96875 C 18.589844 6.585938 19.25 7 20 7 C 21.101563 7 22 6.101563 22 5 C 22 3.898438 21.101563 3 20 3 C 19.273438 3 18.632813 3.382813 18.28125 3.96875 C 17.394531 3.925781 16.769531 3.765625 16.1875 3.5625 C 15.519531 3.328125 14.878906 3 14 3 Z M 20 4 C 20.601563 4 21 4.398438 21 5 C 21 5.601563 20.601563 6 20 6 C 19.398438 6 19 5.601563 19 5 C 19 4.398438 19.398438 4 20 4 Z M 12 10 C 14.320313 10 16.382813 10.636719 17.8125 11.59375 C 19.242188 12.550781 20 13.753906 20 15 C 20 16.246094 19.242188 17.449219 17.8125 18.40625 C 16.382813 19.363281 14.320313 20 12 20 C 9.679688 20 7.617188 19.363281 6.1875 18.40625 C 4.757813 17.449219 4 16.246094 4 15 C 4 13.753906 4.757813 12.550781 6.1875 11.59375 C 7.617188 10.636719 9.679688 10 12 10 Z M 3.59375 10.03125 C 3.925781 10.03125 4.277344 10.101563 4.59375 10.28125 C 3.628906 11.023438 2.878906 11.9375 2.4375 12.96875 C 1.855469 12.28125 1.867188 11.191406 2.375 10.53125 C 2.671875 10.195313 3.121094 10.03125 3.59375 10.03125 Z M 20.40625 10.03125 C 20.878906 10.03125 21.328125 10.195313 21.625 10.53125 C 22.117188 11.085938 22.15625 12.175781 21.5625 12.9375 C 21.121094 11.914063 20.363281 11.019531 19.40625 10.28125 C 19.722656 10.101563 20.074219 10.03125 20.40625 10.03125 Z M 9 12 C 8.171875 12 7.5 12.671875 7.5 13.5 C 7.5 14.328125 8.171875 15 9 15 C 9.828125 15 10.5 14.328125 10.5 13.5 C 10.5 12.671875 9.828125 12 9 12 Z M 15 12 C 14.171875 12 13.5 12.671875 13.5 13.5 C 13.5 14.328125 14.171875 15 15 15 C 15.828125 15 16.5 14.328125 16.5 13.5 C 16.5 12.671875 15.828125 12 15 12 Z M 16.09375 16.40625 C 15.195313 17.207031 13.699219 17.6875 12 17.6875 C 10.300781 17.6875 8.804688 17.199219 7.90625 16.5 C 8.40625 17.800781 10 19 12 19 C 14 19 15.59375 17.804688 16.09375 16.40625 Z"></path>
    </svg>
  );
}

function DuolingoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M 10 5 C 7.2504839 5 5 7.2504839 5 10 L 5 16.951172 A 1.0005646 1.0005646 0 0 0 5 17.050781 L 5 28.228516 A 1.0001 1.0001 0 0 0 5 28.453125 L 5 40 C 5 42.749516 7.2504839 45 10 45 L 40 45 C 42.749516 45 45 42.749516 45 40 L 45 28.460938 A 1.0001 1.0001 0 0 0 45 28.236328 L 45 16.992188 L 45 10 C 45 7.2504839 42.749516 5 40 5 L 10 5 z M 10 7 L 40 7 C 41.668484 7 43 8.3315161 43 10 L 43 13.583984 C 42.733855 13.062406 42.442885 12.537395 42.050781 12.074219 C 41.579715 11.517768 40.881 11 40 11 C 39.475223 11 39.069791 11.162514 38.728516 11.361328 C 38.703776 11.271358 38.729919 11.275538 38.699219 11.183594 C 38.542599 10.713725 38.301666 10.200104 37.863281 9.7617188 C 37.424896 9.3233338 36.75 9 36 9 C 35 9 34.31469 9.545946 33.533203 10.144531 C 32.751716 10.743117 31.912106 11.489065 31 12.21875 C 29.175788 13.678119 27.1 15 25 15 C 22.9 15 20.824212 13.678119 19 12.21875 C 18.087894 11.489065 17.248284 10.743117 16.466797 10.144531 C 15.68531 9.545946 15 9 14 9 C 13.25 9 12.575104 9.3233339 12.136719 9.7617188 C 11.698334 10.200104 11.457404 10.713725 11.300781 11.183594 C 11.270131 11.275534 11.296184 11.271364 11.271484 11.361328 C 10.930212 11.162514 10.524777 11 10 11 C 9.119 11 8.4202849 11.517768 7.9492188 12.074219 C 7.5571146 12.537395 7.2661447 13.062406 7 13.583984 L 7 10 C 7 8.3315161 8.3315161 7 10 7 z M 14 11 C 14 11 14.56469 11.204054 15.251953 11.730469 C 15.939216 12.256883 16.787106 13.010935 17.75 13.78125 C 19.675788 15.321881 22.1 17 25 17 C 27.9 17 30.324212 15.321881 32.25 13.78125 C 33.212894 13.010935 34.060784 12.256883 34.748047 11.730469 C 35.43531 11.204054 36 11 36 11 C 36.25 11 36.325104 11.05167 36.449219 11.175781 C 36.573334 11.299896 36.707404 11.536275 36.800781 11.816406 C 36.987536 12.37667 37 13 37 13 A 1.0001 1.0001 0 0 0 37.029297 13.244141 C 37.068767 13.401574 37.165157 13.638785 37.402344 13.828125 C 37.63953 14.017465 37.964364 14.071677 38.164062 14.052734 C 38.56346 14.014854 38.662613 13.892504 38.771484 13.818359 C 38.989227 13.67007 39.125885 13.540321 39.287109 13.410156 C 39.609556 13.149827 39.950333 13 40 13 C 40.119 13 40.259425 13.05301 40.525391 13.367188 C 40.791356 13.681361 41.087774 14.206322 41.371094 14.78125 C 41.654414 15.356178 41.928169 15.975975 42.246094 16.533203 C 42.450134 16.890826 42.668074 17.253831 43 17.544922 L 43 28.095703 C 41.506352 31.00022 38.492581 33 35 33 C 33.545132 33 32.185569 32.638709 30.970703 32.025391 C 30.83598 31.019167 30.172014 30.1448 29.240234 29.416016 C 28.194351 28.597985 26.730556 28 25 28 C 23.269444 28 21.805649 28.597985 20.759766 29.416016 C 19.827986 30.1448 19.16402 31.019167 19.029297 32.025391 C 17.814431 32.638709 16.454868 33 15 33 C 11.507419 33 8.4936492 31.00022 7 28.095703 L 7 17.544922 C 7.331926 17.253831 7.5498655 16.890826 7.7539062 16.533203 C 8.0718314 15.975975 8.3455866 15.356178 8.6289062 14.78125 C 8.9122261 14.206322 9.2086442 13.681361 9.4746094 13.367188 C 9.7405745 13.053013 9.881 13 10 13 C 10.04967 13 10.390441 13.149827 10.712891 13.410156 C 10.874115 13.540321 11.010773 13.67007 11.228516 13.818359 C 11.337387 13.892509 11.43654 14.014849 11.835938 14.052734 C 12.035635 14.071674 12.36047 14.017464 12.597656 13.828125 C 12.834843 13.638785 12.931233 13.401574 12.970703 13.244141 A 1.0001 1.0001 0 0 0 13 13 C 13 13 13.01246 12.37667 13.199219 11.816406 C 13.292599 11.536275 13.426666 11.299896 13.550781 11.175781 C 13.674896 11.051666 13.75 11 14 11 z M 11.044922 12.732422 C 11.044361 12.767888 11 13 11 13 L 11.029297 12.755859 C 11.030697 12.750359 11.043312 12.738312 11.044922 12.732422 z M 38.955078 12.732422 C 38.956678 12.738322 38.969333 12.750389 38.970703 12.755859 L 39 13 C 39 13 38.955638 12.767888 38.955078 12.732422 z M 15 16 C 11.698375 16 9 18.698375 9 22 L 9 24 C 9 27.301625 11.698375 30 15 30 C 18.301625 30 21 27.301625 21 24 L 21 22 C 21 18.698375 18.301625 16 15 16 z M 35 16 C 31.698375 16 29 18.698375 29 22 L 29 24 C 29 27.301625 31.698375 30 35 30 C 38.301625 30 41 27.301625 41 24 L 41 22 C 41 18.698375 38.301625 16 35 16 z M 15 18 C 17.220375 18 19 19.779625 19 22 L 19 24 C 19 26.220375 17.220375 28 15 28 C 12.779625 28 11 26.220375 11 24 L 11 22 C 11 19.779625 12.779625 18 15 18 z M 35 18 C 37.220375 18 39 19.779625 39 22 L 39 24 C 39 26.220375 37.220375 28 35 28 C 32.779625 28 31 26.220375 31 24 L 31 22 C 31 19.779625 32.779625 18 35 18 z M 15 20 C 14.71 20 14.429688 20.059687 14.179688 20.179688 C 14.669688 20.409687 15 20.91 15 21.5 C 15 22.33 14.33 23 13.5 23 C 13.32 23 13.16 22.970156 13 22.910156 L 13 24 C 13 25.1 13.9 26 15 26 C 16.1 26 17 25.1 17 24 L 17 22 C 17 21.45 16.780156 20.949844 16.410156 20.589844 C 16.050156 20.219844 15.55 20 15 20 z M 35 20 C 34.71 20 34.429688 20.059687 34.179688 20.179688 C 34.669688 20.409687 35 20.91 35 21.5 C 35 22.33 34.33 23 33.5 23 C 33.32 23 33.16 22.970156 33 22.910156 L 33 24 C 33 25.1 33.9 26 35 26 C 36.1 26 37 25.1 37 24 L 37 22 C 37 21.45 36.780156 20.949844 36.410156 20.589844 C 36.050156 20.219844 35.55 20 35 20 z M 25 30 C 26.269444 30 27.305649 30.439515 28.009766 30.990234 C 28.673017 31.508992 28.954626 32.144523 28.986328 32.351562 A 1.0001 1.0001 0 0 0 28.951172 32.535156 C 28.856553 32.715424 28.604737 33.024197 28.0625 33.314453 C 27.334518 33.704138 26.22657 34 25 34 C 23.77343 34 22.665482 33.704138 21.9375 33.314453 C 21.898947 33.293816 21.877487 33.272735 21.841797 33.251953 A 1.0001 1.0001 0 0 0 21.734375 33.183594 C 21.344006 32.934389 21.127021 32.688272 21.046875 32.535156 A 1.0001 1.0001 0 0 0 21.013672 32.351562 C 21.045374 32.144523 21.326983 31.508992 21.990234 30.990234 C 22.694351 30.439515 23.730556 30 25 30 z M 7 31.533203 C 9.0088449 33.664407 11.85236 35 15 35 C 16.636693 35 18.186044 34.624694 19.585938 33.978516 C 19.727204 34.151934 19.895209 34.307808 20.072266 34.457031 C 20.037187 34.635589 20 34.81423 20 34.998047 C 20 36.143033 20.563757 37.26098 21.419922 38.236328 C 22.276087 39.211676 23.509781 40.039062 25 40.039062 C 26.490219 40.039062 27.723913 39.211676 28.580078 38.236328 C 29.436243 37.26098 30 36.143033 30 34.998047 C 30 34.81423 29.962813 34.635589 29.927734 34.457031 C 30.104791 34.307808 30.272796 34.151934 30.414062 33.978516 C 31.813956 34.624694 33.363307 35 35 35 C 38.14764 35 40.991155 33.664407 43 31.533203 L 43 40 C 43 41.668484 41.668484 43 40 43 L 10 43 C 8.3315161 43 7 41.668484 7 40 L 7 31.533203 z M 22.134766 35.548828 C 22.992493 35.831421 23.958414 36 25 36 C 26.041586 36 27.007507 35.831421 27.865234 35.548828 C 27.719782 35.962841 27.460406 36.482473 27.078125 36.917969 C 26.48679 37.591621 25.719781 38.039062 25 38.039062 C 24.280219 38.039062 23.51321 37.591621 22.921875 36.917969 C 22.539594 36.482473 22.280218 35.962841 22.134766 35.548828 z"></path>
    </svg>
  );
}

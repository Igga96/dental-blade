<script setup lang="ts">
interface Props {
    type: string
    color: 'white' | 'accent' | 'gray' | 'dark' | 'none';
}
const props = defineProps<Props>()
const { type } = props;
</script>
<template>
    <svg v-if="type === 'search'" width="15" height="15" viewBox="0 0 15 15" fill="black"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.55825 10.56C8.59868 11.3059 7.39292 11.7501 6.08341 11.7501C2.9538 11.7501 0.416748 9.21303 0.416748 6.08341C0.416748 2.9538 2.9538 0.416748 6.08341 0.416748C9.21303 0.416748 11.7501 2.9538 11.7501 6.08341C11.7501 7.39292 11.3059 8.59868 10.56 9.55825L14.3759 13.3742C14.6526 13.6508 14.6526 14.0993 14.3759 14.3759C14.0993 14.6526 13.6508 14.6526 13.3742 14.3759L9.55825 10.56ZM10.3334 6.08341C10.3334 8.43062 8.43062 10.3334 6.08341 10.3334C3.7362 10.3334 1.83341 8.43062 1.83341 6.08341C1.83341 3.7362 3.7362 1.83341 6.08341 1.83341C8.43062 1.83341 10.3334 3.7362 10.3334 6.08341Z"
            fill="#FCFCFD" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'glasses'" width="25" height="25" viewBox="0 0 25 25" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 12.5131C11.605 11.1801 13.395 11.1801 14.5 12.5131" stroke="white" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M9.32842 9.67157C10.8905 11.2337 10.8905 13.7663 9.32842 15.3284C7.76632 16.8905 5.23366 16.8905 3.67157 15.3284C2.10947 13.7663 2.10947 11.2337 3.67157 9.67157C5.23368 8.10947 7.76633 8.10947 9.32842 9.67157"
            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M21.3284 9.67157C22.8905 11.2337 22.8905 13.7663 21.3284 15.3284C19.7663 16.8905 17.2337 16.8905 15.6716 15.3284C14.1095 13.7663 14.1095 11.2337 15.6716 9.67157C17.2337 8.10947 19.7663 8.10947 21.3284 9.67157"
            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2.5 12.5H1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23.5 12.5H22.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'burger'" width="25" height="25" viewBox="0 0 25 25" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M3.49658 6.49752H21.5041" stroke="white" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M17.5024 12.5002H3.49658" stroke="white" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M3.49658 18.5026H13.5007" stroke="white" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'arrow'" width="15" height="15" viewBox="0 0 15 15" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.08354 0.384545C4.57376 0.380951 4.15758 0.791302 4.15398 1.30109C4.15039 1.81088 4.56074 2.22706 5.07053 2.23065L11.4192 2.27541L0.793556 12.901C0.433072 13.2615 0.433072 13.846 0.793556 14.2065C1.15404 14.5669 1.7385 14.5669 2.09898 14.2065L12.7237 3.58173L12.7694 9.92962C12.773 10.4394 13.1893 10.8497 13.6991 10.846C14.2088 10.8424 14.6191 10.4261 14.6155 9.91634L14.5539 1.36127C14.5503 0.856605 14.1421 0.448411 13.6374 0.444853L5.08354 0.384545Z"
            fill="white" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'heart'" width="32" height="28" viewBox="0 0 32 28" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16.8909 3.45484L16 4.35945L15.1089 3.4547C13.4844 1.80436 11.2656 0.875 8.94982 0.875C6.63407 0.875 4.4152 1.80436 2.79069 3.4547C-0.596898 6.9359 -0.596898 12.4814 2.79069 15.9626L12.2278 25.545C13.2228 26.5557 14.5817 27.1249 16 27.1249C17.4183 27.1249 18.7773 26.5557 19.7722 25.545L29.2093 15.9628C32.5969 12.4816 32.5969 6.93607 29.2093 3.45486C27.5848 1.80446 25.3659 0.87506 23.0501 0.875057C20.7343 0.875054 18.5154 1.80444 16.8909 3.45484Z"
            fill="white" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'tooth'" width="25" height="24" viewBox="0 0 25 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19.7874 6.41407C18.6336 4.49209 16.3349 3.57909 14.1752 4.18609L13.2205 4.45409C12.7492 4.58608 12.2508 4.58608 11.7805 4.45409L10.8258 4.18609C8.66514 3.57909 6.36743 4.49209 5.21257 6.41407C4.74722 7.18907 4.50104 8.07607 4.50002 8.98106V9.07406C4.49604 12.148 5.1155 15.191 6.31939 18.02L6.64764 18.79C6.95987 19.523 7.68141 20 8.48 20C9.29561 20 10.0292 19.502 10.3304 18.745L11.2801 16.355C11.4792 15.853 11.9626 15.524 12.5 15.524C13.0374 15.524 13.5208 15.853 13.7199 16.355L14.6696 18.745C14.9708 19.502 15.7044 20 16.52 20C17.3186 20 18.0401 19.523 18.3524 18.789L18.6806 18.019C19.8855 15.19 20.504 12.147 20.5 9.07306V8.98006C20.499 8.07607 20.2528 7.18907 19.7874 6.41407Z"
            fill="#B1B5C3" stroke="#B1B5C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'user'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_835_1392)">
            <path
                d="M15.6473 13.6667H8.35287C5.7648 13.6667 3.66675 15.8471 3.66675 18.5368C3.66675 19.9893 4.78765 21.1667 6.17036 21.1667H17.8298C19.2125 21.1667 20.3334 19.9893 20.3334 18.5368C20.3334 15.8471 18.2354 13.6667 15.6473 13.6667Z"
                fill="#B1B5C3" />
            <path
                d="M15.7501 6.58337C15.7501 8.65444 14.0711 10.3334 12.0001 10.3334C9.92901 10.3334 8.25008 8.65444 8.25008 6.58337C8.25008 4.51231 9.92901 2.83337 12.0001 2.83337C14.0711 2.83337 15.7501 4.51231 15.7501 6.58337Z"
                fill="#B1B5C3" />
            <path
                d="M15.6473 13.6667H8.35287C5.7648 13.6667 3.66675 15.8471 3.66675 18.5368C3.66675 19.9893 4.78765 21.1667 6.17036 21.1667H17.8298C19.2125 21.1667 20.3334 19.9893 20.3334 18.5368C20.3334 15.8471 18.2354 13.6667 15.6473 13.6667Z"
                stroke="#B1B5C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M15.7501 6.58337C15.7501 8.65444 14.0711 10.3334 12.0001 10.3334C9.92901 10.3334 8.25008 8.65444 8.25008 6.58337C8.25008 4.51231 9.92901 2.83337 12.0001 2.83337C14.0711 2.83337 15.7501 4.51231 15.7501 6.58337Z"
                stroke="#B1B5C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_835_1392">
                <rect width="20" height="20" fill="white" transform="translate(2 2)" />
            </clipPath>
        </defs>
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'time'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            fill="#B1B5C3" stroke="#B1B5C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 7.5V12L15 14" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'coloredProtection'" width="25" height="25" viewBox="0 0 25 25"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3.64575 11.2156C3.64576 15.8256 6.50742 19.9512 10.8252 21.5662L10.8565 21.5779C11.9164 21.9744 13.084 21.974 14.1437 21.5769L14.169 21.5674C18.4907 19.9478 21.3541 15.8169 21.3541 11.2017V7.32316C21.3541 6.41183 20.7618 5.60627 19.8919 5.33457L13.121 3.21974C12.7166 3.09342 12.2833 3.09342 11.8788 3.21974L5.10798 5.3345C4.23809 5.6062 3.64575 6.41176 3.64575 7.3231V11.2156Z"
            fill="#4963FF" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'coloredUser'" width="25" height="26" viewBox="0 0 25 26" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19.7904 19.1991V20.2509C19.7904 20.8315 19.3237 21.3027 18.7487 21.3027H6.2487C5.6737 21.3027 5.20703 20.8315 5.20703 20.2509V19.1991V19.1823C5.20703 15.9994 8.80911 13.9315 12.4987 13.9315C16.1883 13.9315 19.7904 16.0005 19.7904 19.1823"
            fill="#4963FF" />
        <path
            d="M19.7904 19.1991V20.2509C19.7904 20.8315 19.3237 21.3027 18.7487 21.3027H6.2487C5.6737 21.3027 5.20703 20.8315 5.20703 20.2509V19.1991V19.1823C5.20703 15.9994 8.80911 13.9315 12.4987 13.9315C16.1883 13.9315 19.7904 16.0005 19.7904 19.1823"
            stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M15.069 4.49742C16.4895 5.93181 16.4895 8.25742 15.069 9.69181C13.6484 11.1262 11.3453 11.1262 9.92477 9.69181C8.50424 8.25742 8.50424 5.93181 9.92477 4.49742C11.3453 3.06303 13.6484 3.06303 15.069 4.49742Z"
            fill="#4963FF" />
        <path
            d="M15.069 4.49742C16.4895 5.93181 16.4895 8.25742 15.069 9.69181C13.6484 11.1262 11.3453 11.1262 9.92477 9.69181C8.50424 8.25742 8.50424 5.93181 9.92477 4.49742C11.3453 3.06303 13.6484 3.06303 15.069 4.49742"
            stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'coloredHeart'" width="25" height="25" viewBox="0 0 25 25" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.0303 6.22315L12.5 6.76161L11.9696 6.22307C11.0026 5.24072 9.68188 4.68753 8.30346 4.68753C6.92504 4.68753 5.60429 5.24072 4.63732 6.22307V6.22307C2.62089 8.29521 2.62089 11.5961 4.63732 13.6683L10.2547 19.372C10.8469 19.9737 11.6558 20.3125 12.5 20.3125C13.3442 20.3125 14.1532 19.9737 14.7454 19.372L20.3627 13.6684C22.3791 11.5962 22.3791 8.29531 20.3627 6.22316V6.22316C19.3957 5.24078 18.0749 4.68757 16.6965 4.68756C15.318 4.68756 13.9973 5.24077 13.0303 6.22315Z"
            fill="#4963FF" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'coloredTooth'" width="24" height="25" viewBox="0 0 24 25" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6707 7.56433C12.5783 7.87445 11.4218 7.87445 10.3293 7.56433Z"
            fill="#4963FF" />
        <path d="M13.6707 7.56433C12.5783 7.87445 11.4218 7.87445 10.3293 7.56433" stroke="#4963FF" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19.2851 6.6986V6.6986C18.1316 4.75704 15.8337 3.83475 13.6748 4.44793L12.7204 4.71866C12.2492 4.852 11.751 4.852 11.2808 4.71866L10.3264 4.44793C8.16646 3.83475 5.8695 4.75704 4.71502 6.6986V6.6986C4.24983 7.48149 4.00372 8.37752 4.0027 9.29173V9.38568C3.99872 12.491 4.61798 15.5649 5.82148 18.4227L6.14962 19.2006C6.46175 19.941 7.18305 20.4229 7.98138 20.4229V20.4229C8.79672 20.4229 9.53003 19.9198 9.83115 19.1551L10.7805 16.7408C10.9796 16.2337 11.4628 15.9013 12.0001 15.9013V15.9013C12.5373 15.9013 13.0205 16.2337 13.2196 16.7408L14.169 19.1551C14.4701 19.9198 15.2034 20.4229 16.0187 20.4229V20.4229C16.8171 20.4229 17.5384 19.941 17.8505 19.1995L18.1786 18.4217C19.3831 15.5639 20.0014 12.4899 19.9974 9.38466V9.29072C19.9964 8.37752 19.7503 7.48149 19.2851 6.6986Z"
            fill="#4963FF" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'shield&tick'" width="30" height="30" viewBox="0 0 30 30" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 15L14.375 16.875L18.125 13.125" stroke="#23262F" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.375 13.4588C4.37501 18.9907 7.809 23.9414 12.9904 25.8794L13.0279 25.8935C14.2998 26.3692 15.7009 26.3688 16.9725 25.8923L17.0029 25.8808C22.189 23.9373 25.625 18.9803 25.625 13.442V8.78779C25.625 7.69419 24.9142 6.72752 23.8704 6.40148L15.7454 3.86369C15.26 3.7121 14.74 3.7121 14.2547 3.86369L6.12968 6.4014C5.0858 6.72744 4.375 7.69411 4.375 8.78772V13.4588Z"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'user&heart'" width="30" height="30" viewBox="0 0 30 30" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.99565 23.7535C4.99016 22.4324 5.50965 21.1633 6.4399 20.2252C7.37015 19.2871 8.63494 18.757 9.95605 18.7515C9.96994 18.7515 9.98385 18.7515 9.99778 18.7515H12.8878"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16.2504 20.6154C16.3111 21.8667 16.81 23.0568 17.6598 23.9773C18.3385 24.7657 19.1484 25.4308 20.0538 25.9434C20.8421 26.3832 21.8083 26.3547 22.5694 25.8693C23.39 25.3447 24.1278 24.7008 24.7585 23.9587C25.6241 23.0476 26.152 21.8679 26.2547 20.6154C26.2606 19.8702 25.982 19.1509 25.4757 18.6041C24.9891 18.074 24.3042 17.7696 23.5846 17.7638C22.6811 17.7006 21.808 18.1035 21.2698 18.8319L21.2527 18.857L21.2353 18.8319C20.7455 18.1427 19.945 17.7423 19.0998 17.7638C18.3398 17.7509 17.6072 18.0472 17.07 18.5849C16.5327 19.1226 16.2369 19.8554 16.2504 20.6154Z"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="15" cy="9.05983" r="5.31471" stroke="#23262F" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'sheldue'" width="30" height="30" viewBox="0 0 30 30" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49683 22.5029H9.99787" stroke="#23262F" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M22.5031 9.99787H20.002L18.3338 12.4989L16.1117 7.49683L14.4435 9.99787H7.49683" stroke="#23262F"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.49683 16.2505H10.1367L11.3872 14.3748L13.0541 18.1263L14.3047 16.2505H22.5031" stroke="#23262F"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M3.74512 6.24616V23.7534C3.74512 24.4168 4.00838 25.0531 4.47745 25.5222C4.94653 25.9912 5.58279 26.2545 6.24616 26.2545H23.7534C24.4168 26.2545 25.0531 25.9912 25.5222 25.5222C25.9912 25.0531 26.2545 24.4168 26.2545 23.7534V6.24616C26.2545 5.58279 25.9912 4.94653 25.5222 4.47745C25.0531 4.00838 24.4168 3.74512 23.7534 3.74512H6.24616C5.58279 3.74512 4.94653 4.00838 4.47745 4.47745C4.00838 4.94653 3.74512 5.58279 3.74512 6.24616Z"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`, 'rotate-180']" v-if="type === 'arrowDown'" width="24" height="24" viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z"
            fill="#747B8F" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'WS'" width="35" height="35" viewBox="0 0 35 35" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="35" height="35" rx="17.5" fill="#48C95F" />
        <path
            d="M24.436 10.5547C22.7073 8.83203 20.4024 7.875 17.9695 7.875C12.9116 7.875 8.81402 11.9583 8.81402 16.9987C8.81402 18.5938 9.2622 20.1888 10.0305 21.5286L8.75 26.25L13.6159 24.974C14.9604 25.6758 16.4329 26.0586 17.9695 26.0586C23.0274 26.0586 27.125 21.9753 27.125 16.9349C27.061 14.5742 26.1646 12.2773 24.436 10.5547ZM22.3872 20.2526C22.1951 20.763 21.2988 21.2734 20.8506 21.3372C20.4665 21.401 19.9543 21.401 19.4421 21.2734C19.122 21.1458 18.6738 21.0182 18.1616 20.763C15.8567 19.806 14.3841 17.5091 14.2561 17.3177C14.128 17.1901 13.2957 16.1055 13.2957 14.957C13.2957 13.8086 13.872 13.2982 14.064 13.043C14.2561 12.7878 14.5122 12.7878 14.7043 12.7878C14.8323 12.7878 15.0244 12.7878 15.1524 12.7878C15.2805 12.7878 15.4726 12.724 15.6646 13.1706C15.8567 13.6172 16.3049 14.7656 16.3689 14.8294C16.4329 14.957 16.4329 15.0846 16.3689 15.2122C16.3049 15.3398 16.2409 15.4674 16.1128 15.5951C15.9848 15.7227 15.8567 15.9141 15.7927 15.9779C15.6646 16.1055 15.5366 16.2331 15.6646 16.4245C15.7927 16.6797 16.2409 17.3815 16.9451 18.0195C17.8415 18.7852 18.5457 19.0404 18.8018 19.168C19.0579 19.2956 19.186 19.2318 19.314 19.1042C19.4421 18.9766 19.8902 18.4661 20.0183 18.2109C20.1463 17.9557 20.3384 18.0195 20.5305 18.0833C20.7226 18.1471 21.875 18.7214 22.0671 18.849C22.3232 18.9766 22.4512 19.0404 22.5152 19.1042C22.5793 19.2956 22.5793 19.7422 22.3872 20.2526Z"
            fill="white" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'TG'" width="35" height="35" viewBox="0 0 35 35" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="35" height="35" rx="17.5" fill="#27A6E5" />
        <path
            d="M24.501 11.0269L21.8712 24.7557C21.8712 24.7557 21.5033 25.7076 20.4925 25.2511L14.425 20.4335L14.3968 20.4193C15.2164 19.6572 21.5718 13.7398 21.8496 13.4716C22.2796 13.0562 22.0126 12.8089 21.5134 13.1227L12.1257 19.2963L8.50391 18.0344C8.50391 18.0344 7.93395 17.8245 7.87912 17.368C7.82357 16.9107 8.52267 16.6634 8.52267 16.6634L23.2875 10.6653C23.2875 10.6653 24.501 10.1132 24.501 11.0269Z"
            fill="#FEFEFE" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'VK'" width="35" height="35" viewBox="0 0 35 35" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="35" height="35" rx="17.5" fill="#0077FF" />
        <path
            d="M18.3607 23.625C11.7837 23.625 8.03229 19.0267 7.87598 11.375H11.1705C11.2787 16.9911 13.7075 19.37 15.6313 19.8605V11.375H18.7334V16.2186C20.6332 16.0101 22.6291 13.8029 23.3024 11.375H26.4046C26.1508 12.6342 25.6451 13.8264 24.9189 14.8772C24.1927 15.9279 23.2617 16.8146 22.1842 17.4816C23.387 18.0911 24.4493 18.9538 25.3012 20.0128C26.153 21.0717 26.775 22.3029 27.126 23.625H23.7112C23.3961 22.4767 22.7557 21.4487 21.8702 20.67C20.9847 19.8912 19.8935 19.3964 18.7334 19.2474V23.625H18.3607Z"
            fill="white" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'FB'" width="35" height="35" viewBox="0 0 35 35" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="35" height="35" rx="17.5" fill="#0B84EE" />
        <path
            d="M18.949 17.8192H22.2059L22.7172 14.4905H18.9483V12.6712C18.9483 11.2884 19.3974 10.0622 20.6831 10.0622H22.749V7.15727C22.386 7.10796 21.6183 7 20.1677 7C17.1387 7 15.3629 8.60939 15.3629 12.276V14.4905H12.249V17.8192H15.3629V26.9684C15.9795 27.0617 16.6042 27.125 17.2453 27.125C17.8249 27.125 18.3906 27.0717 18.949 26.9957V17.8192Z"
            fill="white" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'play'" width="14" height="16" viewBox="0 0 14 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M2.94449 0.760103L13.0421 6.41123C14.3193 7.12501 14.3193 8.87499 13.0421 9.58877L2.94449 15.2399C1.64392 15.9684 0 15.0799 0 13.6499V2.3501C0 0.920087 1.64392 0.0315602 2.94449 0.760103Z"
            fill="white" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'whiteProtection'" width="14" height="14" viewBox="0 0 14 14" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M2.0415 6.28075C2.04151 8.86232 3.64404 11.1727 6.062 12.0771L6.07954 12.0836C6.67309 12.3056 7.32692 12.3054 7.92034 12.0831L7.93455 12.0777C10.3547 11.1708 11.9582 8.85745 11.9582 6.27295V4.10097C11.9582 3.59062 11.6265 3.13951 11.1393 2.98736L7.34767 1.80306C7.12118 1.73231 6.87851 1.73231 6.65202 1.80306L2.86035 2.98732C2.37321 3.13947 2.0415 3.59059 2.0415 4.10093V6.28075Z"
            fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'tick'" width="14" height="10" viewBox="0 0 14 10" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.6665 5.36364L5.59508 9L12.3332 1" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'arrowRight'" width="14" height="10" viewBox="0 0 14 10" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13 5L9.27642 1M13 5L9.27642 9M13 5H1" stroke="#B1B5C3" stroke-width="1.33" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'arrowLeft'" width="14" height="10" viewBox="0 0 14 10" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.72358 1M1 5L4.72358 9M1 5H13" stroke="#B1B5C3" stroke-width="1.33" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'lock'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.3125 5.2381C17.3125 2.34518 14.934 1 12 1C9.06599 1 6.6875 3.34518 6.6875 6.2381V10.4286M6.6875 10.4286H5.625C4.4514 10.4286 3.5 11.3666 3.5 12.5238V20.9048C3.5 22.0619 4.4514 23 5.625 23H18.375C19.5486 23 20.5 22.0619 20.5 20.9048V12.5238C20.5 11.3666 19.5486 10.4286 18.375 10.4286H6.6875Z"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 15.6666V17.7619" stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'smile'" width="28" height="28" viewBox="0 0 28 28" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M26.5 14C26.5 20.9036 20.9036 26.5 14 26.5C7.09644 26.5 1.5 20.9036 1.5 14C1.5 7.09644 7.09644 1.5 14 1.5C20.9036 1.5 26.5 7.09644 26.5 14Z"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.8335 18.1666C11.2224 19.3195 14.8335 20.9336 18.1668 18.1666" stroke="#23262F" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="18" cy="10.625" r="1.625" fill="#23262F" />
        <circle cx="10" cy="10.625" r="1.625" fill="#23262F" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'protection'" width="30" height="30" viewBox="0 0 30 30" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 15L14.375 16.875L18.125 13.125" stroke="#23262F" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.375 13.4588C4.37501 18.9907 7.809 23.9414 12.9904 25.8794L13.0279 25.8935C14.2998 26.3692 15.7009 26.3688 16.9725 25.8923L17.0029 25.8808C22.189 23.9373 25.625 18.9803 25.625 13.442V8.78779C25.625 7.69419 24.9142 6.72752 23.8704 6.40148L15.7454 3.86369C15.26 3.7121 14.74 3.7121 14.2547 3.86369L6.12968 6.4014C5.0858 6.72744 4.375 7.69411 4.375 8.78772V13.4588Z"
            stroke="#23262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'fire'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.2211 22.7408C19.0408 21.5725 21.9492 16.7869 20.7173 12.0518C20.0329 9.42136 18.3638 7.08985 16.2075 5.61277C16.0715 5.5196 15.8833 5.61369 15.8753 5.7745C15.8103 7.08561 15.3794 11.3575 12.5261 10.442C9.3964 9.43784 11.9658 2.99473 12.256 1.18312C12.2798 1.03487 12.1251 0.951148 11.9933 1.03066C9.26332 2.67769 3.53126 7.13425 3.0716 13.2022C2.87931 14.5261 3.11946 15.8074 3.26357 16.2825C4.49554 21.0176 9.40138 23.9091 14.2211 22.7408Z"
            stroke="#23262F" stroke-width="2" />
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'implant'" width="40" height="45" viewBox="0 0 45 45" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dii_3_5)">
            <path
                d="M20.2227 21.3889H25.431V31.9792C25.431 33.4174 24.2651 34.5834 22.8268 34.5834C21.3886 34.5834 20.2227 33.4174 20.2227 31.9792V21.3889Z"
                fill="white" />
        </g>
        <g filter="url(#filter1_dii_3_5)">
            <path
                d="M18.1387 26.5973C18.1387 26.2137 18.4496 25.9028 18.8331 25.9028H26.8192C27.2028 25.9028 27.5137 26.2137 27.5137 26.5973C27.5137 26.9808 27.2028 27.2917 26.8192 27.2917H18.8331C18.4496 27.2917 18.1387 26.9808 18.1387 26.5973Z"
                fill="white" />
        </g>
        <g filter="url(#filter2_dii_3_5)">
            <path
                d="M18.1387 29.375C18.1387 28.9915 18.4496 28.6805 18.8331 28.6805H26.8192C27.2028 28.6805 27.5137 28.9915 27.5137 29.375C27.5137 29.7585 27.2028 30.0694 26.8192 30.0694H18.8331C18.4496 30.0694 18.1387 29.7585 18.1387 29.375Z"
                fill="white" />
        </g>
        <g filter="url(#filter3_dii_3_5)">
            <path
                d="M15.3613 20C15.3613 19.2329 15.9832 18.6111 16.7502 18.6111H28.903C29.6701 18.6111 30.2919 19.2329 30.2919 20V22.7778C30.2919 23.5448 29.6701 24.1666 28.903 24.1666H16.7502C15.9832 24.1666 15.3613 23.5448 15.3613 22.7778V20Z"
                fill="white" />
        </g>
        <g filter="url(#filter4_dii_3_5)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M26.3454 5.97139C24.3009 7.37432 21.3501 7.37431 19.3056 5.97138C17.6444 4.83152 15.7863 4.72581 14.0718 5.92024C11.1143 7.98065 9.48999 13.2787 9.85559 18.7739C9.90224 19.4751 10.4989 20 11.2015 20H34.4495C35.1522 20 35.7488 19.4751 35.7955 18.7739C36.1611 13.2787 34.5368 7.98065 31.5792 5.92024C29.8647 4.7258 28.0066 4.83151 26.3454 5.97139Z"
                fill="white" />
        </g>
        <defs>
            <filter id="filter0_dii_3_5" x="11.2119" y="17.2931" width="23.2301" height="31.2161"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="4.91498" />
                <feGaussianBlur stdDeviation="4.5054" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-3.27665" />
                <feGaussianBlur stdDeviation="2.04791" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3_5" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-1.22875" />
                <feGaussianBlur stdDeviation="0.819164" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_3_5" result="effect3_innerShadow_3_5" />
            </filter>
            <filter id="filter1_dii_3_5" x="9.12787" y="21.807" width="27.3966" height="19.4105"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="4.91498" />
                <feGaussianBlur stdDeviation="4.5054" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-3.27665" />
                <feGaussianBlur stdDeviation="2.04791" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3_5" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-1.22875" />
                <feGaussianBlur stdDeviation="0.819164" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_3_5" result="effect3_innerShadow_3_5" />
            </filter>
            <filter id="filter2_dii_3_5" x="9.12787" y="24.5847" width="27.3966" height="19.4105"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="4.91498" />
                <feGaussianBlur stdDeviation="4.5054" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-3.27665" />
                <feGaussianBlur stdDeviation="2.04791" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3_5" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-1.22875" />
                <feGaussianBlur stdDeviation="0.819164" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_3_5" result="effect3_innerShadow_3_5" />
            </filter>
            <filter id="filter3_dii_3_5" x="6.35053" y="14.5153" width="32.9523" height="23.5771"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="4.91498" />
                <feGaussianBlur stdDeviation="4.5054" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-3.27665" />
                <feGaussianBlur stdDeviation="2.04791" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3_5" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-1.22875" />
                <feGaussianBlur stdDeviation="0.819164" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_3_5" result="effect3_innerShadow_3_5" />
            </filter>
            <filter id="filter4_dii_3_5" x="0.793888" y="0.97364" width="44.0631" height="32.9521"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="4.91498" />
                <feGaussianBlur stdDeviation="4.5054" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-3.27665" />
                <feGaussianBlur stdDeviation="2.04791" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3_5" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-1.22875" />
                <feGaussianBlur stdDeviation="0.819164" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_3_5" result="effect3_innerShadow_3_5" />
            </filter>
        </defs>
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'caries1'" width="45" height="43" viewBox="0 0 45 43" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dii_479_2381)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.3056 4.65558C21.3501 5.50272 24.3009 5.50272 26.3454 4.65558C28.0066 3.96728 29.8647 3.90345 31.5792 4.62469C35.1973 6.14672 36.8201 10.5946 35.2454 14.6069C35.2447 14.6086 35.245 14.6106 35.2442 14.6122L34.754 15.6431C33.0928 19.1364 31.8407 22.7984 31.0209 26.5608L30.2411 30.1398C29.9713 31.1687 29.0176 31.8887 27.9249 31.8887C26.7512 31.8887 25.7512 31.0608 25.5648 29.935L24.4655 23.292C24.336 22.5096 23.6411 21.9343 22.8255 21.9343C22.01 21.9343 21.315 22.5096 21.1856 23.292L20.0862 29.935C19.8999 31.0609 18.8998 31.8887 17.7262 31.8887C16.6334 31.8887 15.6798 31.1687 15.4099 30.1398L14.6301 26.5608C13.8103 22.7984 12.5582 19.1364 10.897 15.6431L10.4068 14.6122C10.4061 14.6106 10.4063 14.6086 10.4057 14.6069C9.44246 12.1527 9.67554 9.53557 10.8298 7.52471C10.9341 7.34306 11.178 7.3076 11.3555 7.41876C11.7838 7.68694 12.3281 7.90034 12.8389 8.1006C12.9478 8.1433 13.0552 8.1854 13.1596 8.2273C13.3707 8.31203 13.5588 8.43588 13.7073 8.60988C14.1953 9.1818 13.5241 9.9931 12.8093 10.857C12.2367 11.5492 11.6361 12.2751 11.5812 12.9387C11.5194 13.6856 12.6227 13.7306 13.9056 13.7829H13.9056C15.1861 13.8351 16.6454 13.8946 17.304 14.6664C18.6225 16.2116 19.8245 12.3684 18.7246 10.1246C17.8317 8.30311 18.9238 8.08868 20.3191 7.81468C20.6428 7.75113 20.9827 7.68438 21.3179 7.59364C22.3158 7.32356 21.8775 6.21973 20.9543 5.1972C20.9047 5.14233 20.838 5.10609 20.7656 5.09149C20.2477 4.98714 19.7543 4.84183 19.3048 4.65557C18.4565 4.30408 17.5568 4.11544 16.6512 4.11104C17.5571 4.11534 18.457 4.30399 19.3056 4.65558Z"
                fill="white" />
        </g>
        <defs>
            <filter id="filter0_dii_479_2381" x="0.793888" y="0.0151443" width="44.0631" height="45.7994"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="4.91498" />
                <feGaussianBlur stdDeviation="4.5054" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_479_2381" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_479_2381" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-3.27665" />
                <feGaussianBlur stdDeviation="2.04791" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_479_2381" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha" />
                <feOffset dy="-1.22875" />
                <feGaussianBlur stdDeviation="0.819164" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect2_innerShadow_479_2381" result="effect3_innerShadow_479_2381" />
            </filter>
        </defs>
    </svg>
    <svg :class="[`svg-${color}`]" v-if="type === 'caries2'" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dii_3_5)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.6931 11.6557C26.6485 12.5028 23.6978 12.5028 21.6532 11.6557C19.992 10.9674 18.1339 10.9036 16.4195 11.6248C12.8014 13.1468 11.1786 17.5947 12.7533 21.607C12.7537 21.6079 12.7537 21.6089 12.7533 21.6098L13.2447 22.6432C14.9059 26.1365 16.158 29.7985 16.9778 33.5609L17.7576 37.1399C18.0274 38.1688 18.9811 38.8889 20.0739 38.8889C21.2475 38.8889 22.2475 38.061 22.4339 36.9351L23.5332 30.2921C23.6627 29.5098 24.3576 28.9345 25.1732 28.9345C25.9888 28.9345 26.6837 29.5098 26.8132 30.2921L27.9125 36.9351C28.0988 38.061 29.0989 38.8889 30.2725 38.8889C31.3653 38.8889 32.3189 38.1688 32.5888 37.1399L33.3686 33.5609C34.1884 29.7985 35.4405 26.1365 37.1017 22.6432L37.5931 21.6098C37.5927 21.6089 37.5927 21.6079 37.593 21.607C39.1678 17.5947 37.545 13.1468 33.9269 11.6248C32.2124 10.9036 30.3543 10.9674 28.6931 11.6557Z" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5688 26.2167L34.5277 19.9089C34.4276 19.3025 33.7274 18.9959 33.2014 19.3281L32.3398 19.8722L30.8008 17.1506C30.6345 16.8565 30.2571 16.7505 29.9577 16.9139C29.6584 17.0773 29.5505 17.4482 29.7168 17.7423L31.4485 20.8046C31.692 21.2352 32.255 21.3742 32.6767 21.1078L33.3945 20.6545L34.7108 28.6293C34.9762 27.8184 35.2623 27.014 35.5688 26.2167Z" fill="#4963FF"/>
<defs>
<filter id="filter0_dii_3_5" x="-13.7988" y="-0.684872" width="77.9437" height="79.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="14.1551"/>
<feGaussianBlur stdDeviation="12.9756"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.396078 0 0 0 0 1 0 0 0 0.35 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-9.43676"/>
<feGaussianBlur stdDeviation="5.89798"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.285189 0 0 0 0 0.397316 0 0 0 0 1 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_3_5"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3.53879"/>
<feGaussianBlur stdDeviation="2.35919"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_3_5" result="effect3_innerShadow_3_5"/>
</filter>
</defs>
</svg>
<svg :class="[`svg-${color}`]" v-if="type === 'checkmark'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5596 7.44385L12.0036 14.9998L8.22656 11.2218" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C13.453 3 14.821 3.353 16.036 3.964" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg :class="[`svg-${color}`]" v-if="type === 'boockmark'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 15.667V5C4 3.895 4.895 3 6 3H18C19.105 3 20 3.895 20 5V15.667C20 16.393 19.606 17.063 18.971 17.415L12.971 20.748C12.367 21.084 11.632 21.084 11.028 20.748L5.028 17.415C4.394 17.062 4 16.393 4 15.667Z" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8021 13.909L11.6321 13.473C11.8631 13.352 12.1391 13.352 12.3701 13.473L13.2001 13.909C13.4681 14.05 13.7911 14.026 14.0351 13.848L14.3451 13.623C14.5891 13.446 14.7111 13.145 14.6611 12.848L14.5021 11.924C14.4581 11.667 14.5431 11.404 14.7301 11.222L15.4011 10.568C15.6171 10.357 15.6951 10.042 15.6021 9.755L15.4841 9.391C15.3911 9.104 15.1431 8.895 14.8441 8.851L13.9161 8.716C13.6581 8.679 13.4351 8.516 13.3191 8.282L12.9041 7.441C12.7691 7.171 12.4931 7 12.1911 7H11.8081C11.5061 7 11.2301 7.171 11.0971 7.442L10.6821 8.283C10.5661 8.517 10.3431 8.68 10.0851 8.717L9.15812 8.851C8.85912 8.895 8.61112 9.104 8.51812 9.391L8.40012 9.755C8.30712 10.042 8.38412 10.357 8.60112 10.568L9.27212 11.222C9.45912 11.404 9.54412 11.667 9.50012 11.924L9.34112 12.848C9.29012 13.146 9.41312 13.446 9.65712 13.623L9.96712 13.848C10.2111 14.025 10.5341 14.049 10.8021 13.909V13.909Z" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg :class="[`svg-${color}`]" v-if="type === 'coloredlock'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V10" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V17" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 21H7C5.895 21 5 20.105 5 19V12C5 10.895 5.895 10 7 10H17C18.105 10 19 10.895 19 12V19C19 20.105 18.105 21 17 21Z" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg :class="[`svg-${color}`]" v-if="type === 'coloreduser'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3074 19.257C16.9234 17.417 14.7054 16 12.0004 16C9.29536 16 7.07736 17.417 6.69336 19.257" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1213 7.87868C15.2929 9.05025 15.2929 10.9497 14.1213 12.1213C12.9497 13.2929 11.0502 13.2929 9.87868 12.1213C8.70711 10.9497 8.70711 9.05025 9.87868 7.87868C11.0502 6.70711 12.9497 6.70711 14.1213 7.87868" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg :class="[`svg-${color}`]" v-if="type === 'certificate'" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.0015" cy="12.501" r="3.50146" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.002 15.374V20.004L16.0028 19.0035L18.0036 20.004V15.374" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0003 19.0036H2.99693C1.89147 19.0036 0.996094 18.1082 0.996094 17.0028V2.99693C0.996094 1.89147 1.89147 0.996094 2.99693 0.996094H16.0023C17.1078 0.996094 18.0032 1.89147 18.0032 2.99693V5.99818" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.99805 4.99777H14.0018" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.99805 8.99923H8.99971" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.99805 13.0012H7.9993" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg :class="[`svg-${color}`]" v-if="type === 'stars'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9978 16.0019C11.9978 13.7918 13.7894 12.0002 15.9994 12.0002C13.7894 12.0002 11.9978 10.2086 11.9978 7.99854C11.9978 10.2086 10.2062 12.0002 7.99609 12.0002C10.2062 12.0002 11.9978 13.7918 11.9978 16.0019Z" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0036 11.9998C21.0036 16.9725 16.9725 21.0036 11.9998 21.0036C7.02721 21.0036 2.99609 16.9725 2.99609 11.9998C2.99609 7.02721 7.02721 2.99609 11.9998 2.99609" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0013 7.99859C19.0013 6.34105 20.345 4.99734 22.0025 4.99734C20.345 4.99734 19.0013 3.65364 19.0013 1.99609C19.0013 3.65364 17.6575 4.99734 16 4.99734C17.6575 4.99734 19.0013 6.34105 19.0013 7.99859Z" stroke="#4963FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</template>
<style lang="scss">
svg {
    vertical-align: middle;
}

.svg-accent {

    path {
        fill: #4963FF;
    }
}

.svg-white {
    path {
        fill: #FFFFFF;
    }
}

.svg-gray {
    path {
        fill: #B1B5C3;
    }
}

.svg-dark {
    path {
        fill: #23262F;
    }
}


/*.svg-dark {
    path {
        fill: #23262F;
    }
}*/</style>
<script setup lang="ts">
import { type IconType } from './types';
interface Props {
    type: IconType
    color: 'white' | 'accent' | 'gray' | 'dark';
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
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.6707 7.56433C12.5783 7.87445 11.4218 7.87445 10.3293 7.56433Z" fill="#4963FF" />
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
            stroke-linejoin="round" /></svg>
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

/*.svg-dark {
    path {
        fill: #23262F;
    }
}*/
</style>
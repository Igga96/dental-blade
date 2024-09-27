import { DoctorItem } from './doctors.types';

interface DoctorsState {
    doctorsData: DoctorItem[];
    selectedSpecialty: string;
}

export const doctorsModule = {
    namespaced: true,
    state: () => ({
        doctorsData: <DoctorItem[]>[
            {
                id: 0,
                firstName: 'Александр',
                lastName: 'Фроленков',
                middleName: 'Сергеевич',
                category: 'врач высшей категории',
                experienceYears: 13,
                specialty: [
                    { id: 0, name: 'гигиенист' },
                    { id: 1, name: 'десткий стоматолог' }
                ],
                treatmentProfile: [
                    { id: 0, name: 'гиперестезия', percent: 20 },
                    { id: 0, name: 'удаление зуба', percent: 35 },
                    { id: 0, name: 'кариес', percent: 45 },
                ],
                education: [
                    { id: 0, edStart: '2008', edEnd: '2014', name: 'Лечебный факультет Кировского государственного медицинского университета' },
                    { id: 1, edStart: '2014', edEnd: '2015', name: 'Интернатура: рентгенология. Специальность по диплому: врач-рентгенолог' },
                    { id: 2, edStart: '2014', edEnd: '2015', name: 'время врач-рентгенолог клиники «Доступная медицина»' },
                ],
                advancedTraining: [
                    { id: 0, year: '2016', name: "«Компьютерная томография» ГБОУ ВПО РНИМУ им. Н.И. Пирогова Минздрава России" },
                    { id: 1, year: '2017', name: "«Маммография» Казанская государственная медицинская академия" },
                    { id: 2, year: '2018', name: "«Компьютерная и магнитно-резонансная томография» СЗГМУ им. И.И. Мечникова" },
                    { id: 3, year: '2020', name: "«Компьютерная томография» ФГБУ НМИЦ им. В.А. Алмазова" },
                    { id: 4, year: '2021', name: "«Лучевая диагностика заболеваний гепатопанкреатодуоденальной зоны» СЗГМУ им. И.И. Мечникова" },
                ],
                imgPath: require('@/assets/images/doctors/doctor_1.png'),
                rating: '4.8',
                slug: 'frolenkov-aleksandr-sergeevich',
            },
            {
                id: 1,
                firstName: 'Наталья',
                lastName: 'Евтеева',
                middleName: 'Васильевна',
                category: 'доктор медицинских наук',
                specialty: [
                    { id: 0, name: 'стоматолог-терапевт' },
                    { id: 1, name: 'хирург' }
                ],
                experienceYears: 18,
                treatmentProfile: [
                    { id: 0, name: 'абсцесс', percent: 20 },
                    { id: 0, name: 'гипоплазия', percent: 35 },
                    { id: 0, name: 'кариес', percent: 45 },
                ],
                education: [
                    { id: 0, edStart: '2008', edEnd: '2014', name: 'Лечебный факультет Кировского государственного медицинского университета' },
                    { id: 1, edStart: '2014', edEnd: '2015', name: 'Интернатура: рентгенология. Специальность по диплому: врач-рентгенолог' },
                    { id: 2, edStart: 'с ноября 2020', edEnd: 'по настоящее время', name: 'врач-рентгенолог клиники «Доступная медицина»' },
                ],
                advancedTraining: [
                    { id: 0, year: '2016', name: "«Компьютерная томография» ГБОУ ВПО РНИМУ им. Н.И. Пирогова Минздрава России" },
                    { id: 1, year: '2017', name: "«Маммография» Казанская государственная медицинская академия" },
                    { id: 2, year: '2018', name: "«Компьютерная и магнитно-резонансная томография» СЗГМУ им. И.И. Мечникова" },
                    { id: 3, year: '2020', name: "«Компьютерная томография» ФГБУ НМИЦ им. В.А. Алмазова" },
                    { id: 4, year: '2021', name: "«Лучевая диагностика заболеваний гепатопанкреатодуоденальной зоны» СЗГМУ им. И.И. Мечникова" },
                ],
                imgPath: require('@/assets/images/doctors/doctor_3.png'),
                rating: '4.8',
                slug: 'evteeva-natalya-vsilyevna',
            },
            {
                id: 2,
                firstName: 'Василий',
                lastName: 'Иванов',
                middleName: 'Генрихович',
                category: 'профессор',
                specialty: [
                    { id: 0, name: 'ортопед' },
                    { id: 1, name: 'пародонтолог' }
                ],
                experienceYears: 25,
                treatmentProfile: [
                    { id: 0, name: 'пульпит зуба', percent: 13 },
                    { id: 0, name: 'периодонит', percent: 33 },
                    { id: 0, name: 'кариес', percent: 25 },
                ],
                education: [
                    { id: 0, edStart: '2008', edEnd: '2014', name: 'Лечебный факультет Кировского государственного медицинского университета' },
                    { id: 1, edStart: '2014', edEnd: '2015', name: 'Интернатура: рентгенология. Специальность по диплому: врач-рентгенолог' },
                    { id: 2, edStart: '2015', edEnd: '2016', name: 'время врач-рентгенолог клиники «Доступная медицина»' },
                ],
                advancedTraining: [
                    { id: 0, year: '2016', name: "«Компьютерная томография» ГБОУ ВПО РНИМУ им. Н.И. Пирогова Минздрава России" },
                    { id: 1, year: '2017', name: "«Маммография» Казанская государственная медицинская академия" },
                    { id: 2, year: '2018', name: "«Компьютерная и магнитно-резонансная томография» СЗГМУ им. И.И. Мечникова" },
                    { id: 3, year: '2020', name: "«Компьютерная томография» ФГБУ НМИЦ им. В.А. Алмазова" },
                    { id: 4, year: '2021', name: "«Лучевая диагностика заболеваний гепатопанкреатодуоденальной зоны» СЗГМУ им. И.И. Мечникова" },
                ],
                imgPath: require('@/assets/images/doctors/doctor_4.png'),
                rating: '4.8',
                slug: 'ivanov-vasiliy-genrihovich',
            },
            {
                id: 3,
                firstName: 'Элина',
                lastName: 'Циколия',
                middleName: 'Михайловна',
                category: 'кандидат медицинских наук',
                specialty: [
                    { id: 0, name: 'имплантолог' },
                    { id: 1, name: 'ортодонт' },
                    { id: 2, name: 'пародонтолог' }
                ],
                experienceYears: 10,
                treatmentProfile: [
                    { id: 0, name: 'абсцесс', percent: 10 },
                    { id: 0, name: 'гипоплазия', percent: 30 },
                    { id: 0, name: 'кариес', percent: 50 },
                ],
                education: [
                    { id: 0, edStart: '2008', edEnd: '2014', name: 'Лечебный факультет Кировского государственного медицинского университета' },
                    { id: 1, edStart: '2014', edEnd: '2015', name: 'Интернатура: рентгенология. Специальность по диплому: врач-рентгенолог' },
                    { id: 2, edStart: '2014', edEnd: '2015', name: 'время врач-рентгенолог клиники «Доступная медицина»' },
                ],
                advancedTraining: [
                    { id: 0, year: '2016', name: "«Компьютерная томография» ГБОУ ВПО РНИМУ им. Н.И. Пирогова Минздрава России" },
                    { id: 1, year: '2017', name: "«Маммография» Казанская государственная медицинская академия" },
                    { id: 2, year: '2018', name: "«Компьютерная и магнитно-резонансная томография» СЗГМУ им. И.И. Мечникова" },
                    { id: 3, year: '2020', name: "«Компьютерная томография» ФГБУ НМИЦ им. В.А. Алмазова" },
                    { id: 4, year: '2021', name: "«Лучевая диагностика заболеваний гепатопанкреатодуоденальной зоны» СЗГМУ им. И.И. Мечникова" },
                ],
                imgPath: require('@/assets/images/doctors/doctor_2.png'),
                rating: '4.8',
                slug: 'cikolya-elina-michailovna',
            },
        ],
        selectedSpecialty: '',
    }),
    getters: {
        formattedDoctors(state: DoctorsState) {
            const filteredDoctors = state.selectedSpecialty
                ? state.doctorsData.filter(doctor =>
                    doctor.specialty.some(s => s.name === state.selectedSpecialty)
                )
                : state.doctorsData;

            return filteredDoctors.map(doctor => ({
                ...doctor,
                fullName: `${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`,
                specialties: doctor.specialty.map(s => s.name).join(', '),
                experienceText: `стаж ${doctor.experienceYears} лет`,
            }));
        },
        uniqueSpecialties(state: DoctorsState) {
            const specialties = state.doctorsData.flatMap(doctor => doctor.specialty.map(s => s.name));
            return [...new Set(specialties)];
        },
        getDoctorById: (state: DoctorsState) => (id: number) => {
            const doctor = state.doctorsData.find(doctor => doctor.id === id);
            if (doctor) {
                return {
                    ...doctor,
                    fullName: `${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`,
                    specialties: doctor.specialty.map(s => s.name).join(', '),
                    experienceText: `стаж ${doctor.experienceYears} лет`,
                };
            }
            return null;
        },
        getDoctorBySlug: (state: DoctorsState) => (slug: string) => {
            const doctor = state.doctorsData.find(doctor => doctor.slug === slug);
            if (doctor) {
                return {
                    ...doctor,
                    fullName: `${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`,
                    specialties: doctor.specialty.map(s => s.name).join(', '),
                    experienceText: `стаж ${doctor.experienceYears} лет`,
                };
            }
            return null;
        },
    },
    mutations: {
        setSelectedSpecialty(state: DoctorsState, specialty: string) {
            state.selectedSpecialty = specialty;
        },
    },
};
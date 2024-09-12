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
                specialty: [
                    { id: 0, name: 'Гигиенист' },
                    { id: 1, name: 'Десткий стоматолог' }
                ],
                experienceYears: 13,
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
                sheldue: [
                    { date: 'DD:MM:YYYY', startTime: '9:00', endTime: '19:00' },
                ],
                imgPath: require('@/assets/images/doctors/1.png'),
                rating: '4.8'
            },
            {
                id: 1,
                firstName: 'Наталья',
                lastName: 'Евтеева',
                middleName: 'Васильевна',
                category: 'доктор медицинских наук',
                specialty: [
                    { id: 0, name: 'Cтоматолог-терапевт' },
                    { id: 1, name: 'Хирург' }
                ],
                experienceYears: 18,
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
                sheldue: [
                    { date: 'DD:MM:YYYY', startTime: '9:00', endTime: '19:00' },
                ],
                imgPath: require('@/assets/images/doctors/3.png'),
                rating: '4.8'
            },
            {
                id: 2,
                firstName: 'Василий',
                lastName: 'Иванов',
                middleName: 'Генрихович',
                category: 'профессор',
                specialty: [
                    { id: 0, name: 'Ортопед' },
                    { id: 1, name: 'Пародонтолог' }
                ],
                experienceYears: 25,
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
                sheldue: [
                    { date: 'DD:MM:YYYY', startTime: '9:00', endTime: '19:00' },
                ],
                imgPath: require('@/assets/images/doctors/4.png'),
                rating: '4.8'
            },
            {
                id: 3,
                firstName: 'Элина',
                lastName: 'Циколия',
                middleName: 'Михайловна',
                category: 'кандидат медицинских наук',
                specialty: [
                    { id: 0, name: 'Имплантолог' },
                    { id: 1, name: 'Ортодонт' },
                    { id: 2, name: 'Пародонтолог' }
                ],
                experienceYears: 10,
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
                sheldue: [
                    { date: 'DD:MM:YYYY', startTime: '9:00', endTime: '19:00' },
                ],
                imgPath: require('@/assets/images/doctors/2.png'),
                rating: '4.8'
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
                specialties: doctor.specialty.map(s => s.name).join(', '),
                experienceText: `стаж ${doctor.experienceYears} лет`,
            }));
        },
        uniqueSpecialties(state: DoctorsState) {
            const specialties = state.doctorsData.flatMap(doctor => doctor.specialty.map(s => s.name));
            return [...new Set(specialties)];
        },
    },
    mutations: {
        setSelectedSpecialty(state: DoctorsState, specialty: string) {
            state.selectedSpecialty = specialty;
        },
    },
};
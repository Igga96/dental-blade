import { Contacts } from './contacts.types';

interface ContactsState {
    contactsData: Contacts[];
}

export const contactsModule = {
    namespaced: true,
    state: (): ContactsState => ({
        contactsData: [
            {
                id: 0,/*id клиники в ident и так далее */
                clinicId: 1,
                address: 'Москва, Кутузовский пр-кт, 45',
                phone: '+74959889939',
                timeStart: '10:00',
                timeEnd: '22:00',
                email: 'insmileveneers@gmail.com',
                wsLink: 'ws',
                vkLink: 'wk',
                tgLink: 'imwd_d',
                fbLink: 'fb',
            },
        ]
    }),
    getters: {
        formattedPhone: (state: ContactsState) => {
            const contact = state.contactsData[0];
            return `телефон: +7 (${contact.phone.slice(2, 5)}) ${contact.phone.slice(5)}`;
        },
        formattedWorkingHours: (state: ContactsState) => {
            const contact = state.contactsData[0];
            return `часы работы: ${contact.timeStart}-${contact.timeEnd}`;
        },
        formattedEmail: (state: ContactsState) => {
            const contact = state.contactsData[0];
            return `email: ${contact.email}`;
        }
    }
};
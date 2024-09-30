import { createStore } from 'vuex';
import { casesModule } from '@/entities/cases/model/cases.store';
import { pricesModule } from '@/entities/price/model/price.store';
import { sidebarModule } from '@/features/sidebar/model/sidebar.store';
import { doctorsModule } from '@/entities/doctors/model/doctors.store';
import { questionsModule } from '@/entities/questions/model/questions.store';
import { contactsModule } from '@/entities/contacts/model/contacts.store';
import { authModule } from '@/entities/auth/model/auth.store';

export const store = createStore({
  modules: {
    cases: casesModule,
    prices: pricesModule,
    sidebar: sidebarModule,
    doctors: doctorsModule,
    questions: questionsModule,
    contacts: contactsModule,
    auth: authModule,
  },
});


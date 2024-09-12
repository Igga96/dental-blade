import { createStore } from 'vuex';
import { casesModule } from '@/entities/cases/model/cases.store';
import { pricesModule } from '@/entities/price/model/price.store'
import { sidebarModule } from '@/features/sidebar/model/sidebar.store';
import { doctorsModule } from '@/entities/doctors/model/doctors.store'

export const store = createStore({
  modules: {
    cases: casesModule,
    prices: pricesModule,
    sidebar: sidebarModule,
    doctors: doctorsModule,
  },
});


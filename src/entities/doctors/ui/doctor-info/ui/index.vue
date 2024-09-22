<script setup lang="ts">
import { defineProps } from 'vue';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Heading } from '@/shared/ui/text/heading';

const props = defineProps<{
    doctor: {
        specialties: string;
        fullName: string;
        experienceText: string;
        category: string;
    };
}>();
</script>

<template>
    <div class="doctor-info__content">
        <Paragraph tagName="p" size="xs" color="dark-gray" class="doctor-info__specialities">
            {{ doctor.specialties }}
        </Paragraph>
        <Heading tagName="h2" regular size="s" color="dark" class="doctor-info__name">
            {{ doctor.fullName }}
        </Heading>
        <div class="doctor-info__expierence">
            <Paragraph tagName="span" size="xs" color="dark-gray">
                {{ doctor.experienceText }}
            </Paragraph>
            <span class="dot"></span>
            <Paragraph tagName="span" size="xs" color="dark-gray">
                {{ doctor.category }}
            </Paragraph>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.doctor-info__content {
    .doctor-info__specialities {
        margin-top: 15px;
        font-size: 16px;
    }

    .doctor-info__name {
        margin: 20px 0 30px;
    }

    .doctor-info__expierence {
        display: flex;
        align-items: center;

        .text {
            font-size: 16px;
        }

        .dot {
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 4px;
            background: #747B8F;
            margin: 0 12px;
        }
    }
}

@media screen and (max-width: 768px) {
    .doctor-info__content {
        display: none;

        .doctor-info__specialities {
            margin-top: 3px;
        }

        .doctor-info__name {
            margin: 5px 0 15px;
        }

    }
}
@media screen and (max-width: 541px) {
    .doctor-info__content {
        display: block;}
}
</style>
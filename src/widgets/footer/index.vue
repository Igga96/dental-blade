<script setup lang="ts">
import { Logo } from '@/shared/ui/logo';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { FooterSocialLinks } from '@/entities/contacts/ui/footer-links'
</script>
<template>
    <footer>
        <div class="footer__content">

            <Logo />
            <div class="footer__content-center">
                <div>
                    <Paragraph tagName="p" color="gray" size="xs">Денталмед© 2024, </Paragraph>
                    <Paragraph tagName="p" color="gray" size="xs">
                        Все права защищены, копирование материалов запрещено
                    </Paragraph>
                </div>

                <div class="docs">
                    <div>
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Публичная оферта</a>
                    </div>
                    <div>
                        <a href="">Лицензия</a>
                        <a href="">Нормативная база</a>
                    </div>
                </div>
            </div>
            <FooterSocialLinks />
            <Paragraph tagName="p" color="gray" size="xs" class="footer__content_text-bottom">
                Стоимость процедур определяется после консультации на приеме.
            </Paragraph>

        </div>
    </footer>
</template>
<style scoped lang="scss">
footer {
    background: #23262F;
    padding: 32px 40px;
    
    .logo {
            color: white;
        }

        .footer__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;

            a {
                color: #B1B5C3;
                text-decoration: underline;

                &:hover {
                    color: #3D4FB3;
                }
            }


            .footer__content-center {
                display: flex;
                width: 100%;
                justify-content: space-between;

                p {
                    font-size: 16px;
                }

                .docs {
                    display: flex;
                    gap: 50px;
                    text-decoration: underline;

                    a {
                        display: block;
                        text-align: end;
                    }
                }
            }

            .social-links {
                display: flex;
                gap: 10px;
            }

            .footer__content_text-bottom {
                display: none;
            }
        }
    }


@media screen and (max-width:1680px) {
    footer {
        padding: 32px 35px;
        
    }
}

@media screen and (max-width:1440px) {

    footer {
        padding: 32px 25px;

    }
}

@media screen and (max-width: 768px) {
    footer {
        .footer__content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto;
            gap: 20px;

            .logo {
                order: 1;
                grid-column: 1;
                grid-row: 1;
            }

            .social-links {
                order: 2;
                grid-column: 2;
                grid-row: 1;
                justify-content: end;
            }

            .footer__content-center {
                order: 3;
                grid-column: 1 / -1;
                grid-row: 2;
                flex-direction: column;
                gap: 20px;


                .docs {
                    gap: 15px;
                    justify-content: space-between;

                    div {
                        display: flex;
                        gap: 15px;

                        a {
                            text-align: start;
                        }
                    }
                }
            }

            .footer__content_text-bottom {
                display: block;
                font-size: 16px;
                width: 100%;
                grid-row: 3;
                grid-column: 1 / -1;
            }
        }
    }


}

@media screen and (max-width: 541px) {
    footer {
        padding: 25px 20px;

        .footer__content {
            .footer__content-center {
                gap: 40px;

                .docs {
                    gap: 0;
                    flex-direction: column;

                    div {
                        display: block;

                        a {
                            margin-bottom: 20px;
                        }
                    }
                }
            }

        }
    }

}
</style>
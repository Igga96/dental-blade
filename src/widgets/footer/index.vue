<script setup lang="ts">
import { Logo } from '@/shared/ui/logo';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
</script>
<template>
    <footer>
        <div class="footer__content">

            <Logo />
            <div class="footer__content-center">
                <div>
                    <Paragraph tagName="p" color="dark-gray" size="xs">Денталмед© 2024, </Paragraph>
                    <Paragraph tagName="p" color="dark-gray" size="xs">
                        Все права защищены, копирование материалов запрещено
                    </Paragraph>
                </div>

                <div class="docs">
                    <div>
                        <a href="">Политика конфеденциальности</a>
                        <a href="">Публичная оферта</a>
                    </div>
                    <div>
                        <a href="">Лицензия</a>
                        <a href="">Нормативная база</a>
                    </div>
                </div>
            </div>
            <ul class="social-links">
                <li>
                <a href="">
                        <Icon type="WS" color="none"></Icon>
                    </a>
                    </li>
                <li>
                <a href="">
                        <Icon type="TG" color="none"></Icon>
                    </a>
                    </li>
                <li>
                <a href="">
                        <Icon type="VK" color="none"></Icon>
                    </a>
                    </li>
                <li>
                    <a href="">
                        <Icon type="FB" color="none"></Icon>
                    </a>
                </li>
            </ul>
            <Paragraph tagName="p" color="dark-gray" size="xs" class="footer__content_text-bottom">
                Стоимость процедур определяется после консультации на приеме.
            </Paragraph>

        </div>
    </footer>
</template>
<style scoped lang="scss">
footer {
    background: #23262F;
    padding: 32px 25px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;

    .footer__content {
        display: flex;
        align-items: center;
        color: #747B8F;
        justify-content: space-between;
        gap: 40px;

        a {
            color: #747B8F;

            &:hover {
                color: #B1B5C3;
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

@media screen and (max-width: 375px) {
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
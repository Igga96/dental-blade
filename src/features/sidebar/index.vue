<template>
    <aside class="sidebar">
        <div class="sidebar__content">
            <div class="content__items">
                <div class="item active">
                    <span class="dot"></span>
                    Все виды
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Компьютерная томография
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Рентгенологическое исследование
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Терапевтические услуги
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Ортопедия
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Хиррургия
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Имплантология
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Ортодонтия
                </div>
                <div class="item">
                    <span class="dot"></span>
                    Детская стоматология
                </div>
            </div>
        </div>
    </aside>
</template>
<style scoped lang="scss">
.sidebar {
    border-left: 1px solid rgb(241, 242, 244);

    .sidebar__content {
        padding: 0 20px;
        width: 310px;

        .content__items {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .item {
                color: #747B8F;
                cursor: pointer;
                font-size: 18px;
                display: flex;
                align-items: center;
                gap: 15px;

                .dot {
                    display: none;
                    width: 6px;
                    height: 6px;
                    background-color: #4963FF;
                    border-radius: 50%;
                }

                &:hover {
                    color: #4963FF;
                    font-weight: 500;

                    .dot {
                        display: inline-block;
                    }
                }
            }

            .active {
                color: #4963FF;
                font-weight: 500;

                .dot {
                    display: inline-block;
                }
            }
        }
    }
}
</style>
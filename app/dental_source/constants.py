from enum import Enum


class AccountRole(Enum):
    SUPER_ADMIN = "Главный администратор"
    ADMIN = "Администратор"
    USER = "Пользователь"


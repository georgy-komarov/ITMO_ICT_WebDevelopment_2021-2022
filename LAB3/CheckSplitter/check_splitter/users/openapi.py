from drf_spectacular.utils import extend_schema

from users.serializers import ProfileAvatarSerializer

user_retrieve_schema = extend_schema(summary='Получить информацию о текущем пользователе')
user_update_schema = extend_schema(summary='Редактировать информацию о текущем пользователе')
user_destroy_schema = extend_schema(summary='Деактивировать аккаунт')

user_avatar_update_schema = extend_schema(summary='Обновить аватар текущего пользователя')
user_avatar_destroy_schema = extend_schema(summary='Удалить аватар текущего пользователя',
                                           request=None, responses={200: ProfileAvatarSerializer})

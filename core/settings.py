from box.core.default_settings import * 

INSTALLED_APPS +=[
    'project',
    'project.constructor',
]









try:
    import sys
    import socket
    x = socket.gethostbyname(socket.gethostname())+"----"+sys.argv[-1]

    if sys.argv[-1] == '0.0.0.0:8000':
        print('sys.argv[-1] == 0.0.0.0:8000')
        DEBUG = True 
    else:
        print('sys.argv[-1] != 0.0.0.0:8000')
        DEBUG = False 
except Exception as e:
    print('try failed', e)
    DEBUG = False 
DEBUG = True
# DEBUG = False 





TEMPLATES[0]['OPTIONS']['context_processors'].extend([
    'project.context_processors.context',
])
DJANGO_DEBUG_TOOLBAR_ON = False 
MIDDLEWARE.extend([
    # 'project.middlewares.Middleware',
])
AUTH_USER_MODEL = 'project.ProjectUser'
STATIC_SITEMAP_PAGES = [
    # 'index',
    # 'contact',
    # 'blog',
    # 'about',
]
PROJECT_CORE_MULTILINGUAL_URLS = [
    'project.multilingual_urls',
]
PROJECT_CORE_URLS = [
    'project.urls',
]
ROOT_URLCONF     = 'box.core.urls'
WSGI_APPLICATION = 'core.wsgi.application'
SQLITE = {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}
POSTGRES = {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': 'eleek',
    'USER' : 'jurgeon',
    'PASSWORD' : '69018',
    'HOST' : '127.0.0.1',
    'PORT' : '5432',
}
if config('DB') == 'postgres':
    default = POSTGRES
else:
    default = SQLITE
DATABASES = {
    'default': default,
}



LIQPAY_PUBLIC_KEY = 'i46942964050'
LIQPAY_PRIVATE_KEY = 'e0EMc79BGqm2oieTc4ujvq2iv7NPjNu7MmSlEAoM'
LIQPAY_SANDBOX_PUBLIC_KEY = 'sandbox_i36382218041'
LIQPAY_SANDBOX_PRIVATE_KEY = 'sandbox_XcBJpBTSMHJqN9Ms1mYtYEd7Ha7oW9LlDz8YZQcr'

LIQPAY_SANDBOX_MODE = True 


LOGIN_REDIRECT_URL = 'profile'
LOGIN_URL = 'login'





EMAIL_BACKEND          = 'box.core.sw_global_config.backends.ConfiguredEmailBackend'
EMAIL_USE_TLS          = True
EMAIL_USE_SSL          = False
EMAIL_PORT             = 587
EMAIL_HOST             = "mail.starwayua.com"
EMAIL_HOST_USER        = "dev@starwayua.com"
EMAIL_HOST_PASSWORD    = 'dev69018'#config('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL     = EMAIL_HOST_USER

DEFAULT_RECIPIENT_LIST = [
    "jurgeon018@gmail.com",
    "dev@starwayua.com",
    'eleekbikes@gmail.com',
]



# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'
# EMAIL_USE_TLS = True
# EMAIL_PORT = 587
# EMAIL_HOST_USER = 'jurgeon018@gmail.com'
# EMAIL_HOST_PASSWORD = 'yfpfhrj69001'


FILTER_BY_CATEGORY = False 
FILTER_BY_SUBCATEGORIES = True

DATA_UPLOAD_MAX_MEMORY_SIZE = 56214400
DATA_UPLOAD_MAX_NUMBER_FIELDS = 56214400

PATH_400    = 'page_400.html'
PATH_403    = 'page_403.html'
PATH_404    = 'page_404.html'
PATH_500    = 'page_500.html'
# ACCOUNT_UNIQUE_EMAIL = True
# ACCOUNT_UNIQUE_EMAIL = False 



from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.shortcuts import render 

from .models import * 
from box.apps.sw_shop.sw_catalog.models import *
from box.core.sw_content.models import Page 
from box.apps.sw_shop.sw_cart.decorators import cart_exists


def index(request):
    page = Page.objects.get(code='index')
    test_drive_sliders = TestDriveSlider.objects.all()
    velo_sliders = VeloSlider.objects.all()
    return render(request, 'project/index.html', locals())


def about(request):
    page = Page.objects.get(code='about')
    certificates = Certificate.objects.all()
    partners = Partner.objects.all()
    return render(request, 'project/about.html', locals())


def thank_you(request):
    return render(request, 'project/thank_you.html', locals())

from django.db.models import Max, Min 

def item_category(request, slug):
    category          = get_object_or_404(ItemCategory, slug=slug)
    page              = category 
    items             = Item.objects.filter(category=category)[0:6]
    # items             = []
    all_items         = Item.objects.all()
    show_more         = all_items.count() > 6
    parent_categories = ItemCategory.objects.filter(parent__isnull=True)
    discount_filter   = all_items.filter(discount__isnull=False).exists()
    raw_max_price     = all_items.aggregate(Max('price'))['price__max']
    raw_min_price     = all_items.aggregate(Min('price'))['price__min']
    max_price         = str(raw_max_price).replace(',','.')
    min_price         = str(raw_min_price).replace(',','.')
    return render(request, 'project/item_category.html', locals())


def item(request, slug):
    item = get_object_or_404(Item, slug=slug)
    odd_features = ItemFeature.objects.filter(item=item)[:10:2]
    even_features = ItemFeature.objects.filter(item=item)[1:10:2]
    page = item
    # colour_
    return render(request, 'project/item.html', locals())


def faq(request):
    page = Page.objects.get(code='faq')
    return render(request, 'project/faq.html', locals())


def constructor(request):
    page = Page.objects.get(code='constructor')
    return render(request, 'project/constructor.html', locals())


def test_drive(request):
    page = Page.objects.get(code='test_drive')
    models = TestDriveModel.objects.all()
    return render(request, 'project/test_drive.html', locals())


def delivery(request):
    page = Page.objects.get(code='delivery')
    return render(request, 'project/delivery.html', locals())


@cart_exists
def order(request):
    page = Page.objects.get(code='order')
    return render(request, 'project/order.html', locals())


def search(request):
    page  = Page.objects.get(code='search')
    query = request.POST or request.GET
    query = query.get('main_search','')
    if query:
        search_items = Item.objects.all().filter(
            title__icontains=query,
        )
    return render(request, 'project/search.html', locals())

@login_required
def profile(request):
    page = Page.objects.get(code='profile')
    return render(request, 'project/profile.html', locals())


def shop(request):
    page = Page.objects.get(code='shop')
    return render(request, 'project/shop.html', locals())


def login(request):
    page = Page.objects.get(code='login')
    return render(request, 'project/auth/login.html', locals())


def register(request):
    page = Page.objects.get(code='register')
    return render(request, 'project/auth/register.html', locals())


from project.constructor.models import * 


def parse_request(request):
    query  = request.GET
    codes  = []
    colors = {}
    for parameter_code, value_code in query.items():
        if parameter_code not in ['iframe_type','iframe_color']:
            # Значення всіх чекбоксів
            if value_code == 'true':
                codes.append(parameter_code)
            # Значення всіх некольорів
            elif not value_code.startswith("#"):
                codes.append(value_code)
            # Значення всіх опцій
            else:
                colors.update({
                    f"{parameter_code}":value_code,
                })
    return {
        "colors":colors,
        "codes":codes,
    } 


def page1(request):
    frames          = FrameType.objects.filter(is_active=True)
    frame_colors    = FrameColor.objects.filter(is_active=True)
    query           = request.GET 
    iframe_type     = query.get('iframe_type')
    iframe_color    = query.get('iframe_color')
    if iframe_type:
        frame = FrameType.objects.get(code=iframe_type)
    else:
        frame = frames.first()
    current_frame = frame
    initial_price = frame.get_initial_price()
    result = parse_request(request)
    colors = result['colors']
    codes  = result['codes']
    return render(request, 'project/page1.html', locals())

def common_member(a, b): 
    if (set(a)  & set(b)): 
        return True 
    else: 
        return False

def page2(request):
    query           = dict(request.GET)
    iframe_type     = query.pop('iframe_type')[0]
    iframe_color    = query.pop('iframe_color')[0]
    frame           = FrameType.objects.get(code=iframe_type)
    initial_price   = frame.get_initial_price()

    dict_values = []
    checkbox_values = []
    added_parameters = []
    parents = []
    for parameter_code, value_code in query.items():
        # Парсить значення з урла
        if value_code[0] == 'true':
            # Значення всіх опцій
            value = Value.objects.filter(
                parameter__tab_group__tab__frame=frame,
                code=parameter_code,
            ).first()
            parameter = value.parameter
            checkbox_values.append(value)
            parents.append(value.code)
            added_parameters.append(parameter.id)
        else:
            parameter = Parameter.objects.get(tab_group__tab__frame=frame, code=parameter_code)
            if parameter.type == 'radio_color' or value_code[0].startswith("#"):
                # Інгорує всі кольори
                value = None# value = Value.objects.filter(parameter=parameter, color=value_code[0]).first()
            else:
                # Значення всіх некольорів і неопцій
                value = Value.objects.filter(parameter=parameter, code=value_code[0]).first()
                parents.append(value.code)

        # Ігнорує значення з усіх табів крім третіх
        if parameter and value and parameter.tab_group.tab.id in [3,6,9,12] and added_parameters.count(parameter.id) < 2:
            # ???
            values = []
            for v in Value.objects.filter(parameter=parameter, is_active=True):
                value_class = ""
                if v in checkbox_values:
                    value_class = "form_box__item-active"
                elif v == value:
                    value_class = "form__radio-active"
                if v.get_parents().exists() and not common_member(v.get_parents().values_list('code', flat=True), parents):
                # if value.get_parents().exists() and not common_member(value.get_parents().values_list('code', flat=True), parents):
                    value_class = "form__radio-hiden"
                values.append({
                    "value_class":value_class,
                    "id":v.id,
                    "code":v.code,
                    "name":v.name,
                    "price":v.price,
                    "generate_children_json":v.generate_children_json(),
                    "parameter":v.parameter,
                })
            dict_values.append({
                "parameter":parameter,
                "value":value,
                "values":values,
            })
    # Якщо ???, то штучно вставляється параметр з опціями(перший і єдиний)
    if not added_parameters:
        parameter = Parameter.objects.get(tab_group__tab__frame=frame, type="checkbox_options")
        dict_values.append({
            "parameter":parameter,
            "values":Value.objects.filter(parameter=parameter, is_active=True),
        })
    return render(request, 'project/page2.html', locals())


def page3(request):
    return render(request, 'project/page3.html', locals())


def page4(request):
    return render(request, 'project/page4.html', locals())

# from box.apps.payment.liqpay import 
from box.apps.sw_shop.sw_order.utils import get_order_liqpay_context


def payment(request):
    context = get_order_liqpay_context(request)
    return render(request, 'project/payment.html', context)


from django.urls import path, include 


urlpatterns = [
    
    path('',             index,       name='index'),
    path('about/',       about,       name='about'),
    path('item_category/<slug>/',       item_category,       name='item_category'),
    
    path('item/<slug>/', item,        name='item'),
    path('faq/',         faq,         name='faq'),
    path('constructor/', constructor, name='constructor'),
    path('test_drive/',  test_drive,  name='test_drive'),
    path('order/',       order,       name='order'),
    path('search/',      search,      name='search'),
    path('profile/',     profile,     name='profile'),
    path('shop/',        shop,        name='shop'),
    path('delivery/',        delivery,        name='delivery'),
    path('payment/',        payment,        name='payment'),
    
    path('login/',       login,       name='login'),
    path('register/',    register,    name='register'),
    path('thank_you/',    thank_you,    name='thank_you'),
    path('page1/',    page1,    name='page1'),
    path('page2/',    page2,    name='page2'),
    path('page3/',    page3,    name='page3'),
    path('page4/',    page4,    name='page4'),
]









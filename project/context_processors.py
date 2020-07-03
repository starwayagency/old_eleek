from box.apps.sw_shop.sw_catalog.models import * 
from box.apps.sw_shop.sw_cart.utils import get_cart
from box.apps.sw_shop.sw_cart.models import CartItem


def context(request):
    if not request.session.get('current_currency_code'):
        request.session['current_currency_code'] = 'UAH'
    current_currency_code = request.session['current_currency_code']
    current_currency = Currency.objects.get(code=current_currency_code)
    velo = ItemCategory.objects.get(code='velo')
    ramy = ItemCategory.objects.get(code='ramy')
    comp = ItemCategory.objects.get(code='comp')
    amor = ItemCategory.objects.get(code='amor')
    vilk = ItemCategory.objects.get(code='vilk')
    galm = ItemCategory.objects.get(code='galm')
    moto = ItemCategory.objects.get(code='moto')
    kole = ItemCategory.objects.get(code='kole')
    cart = get_cart(request)
    cart_items = CartItem.objects.filter(cart=cart)
    currencies = Currency.objects.all()
    return locals()






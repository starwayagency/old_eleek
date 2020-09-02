from rest_framework import serializers
from box.apps.sw_shop.sw_cart.models import CartItem,  FavourItem, CartItemAttribute
from box.apps.sw_shop.sw_catalog.api.serializers import ItemDetailSerializer



class CartItemAttributeSerializer(serializers.ModelSerializer):
  class Meta:
    model = CartItemAttribute
    exclude = []



class CartItemSerializer(serializers.ModelSerializer):
  item        = ItemDetailSerializer(read_only=True)
  total_price = serializers.ReadOnlyField()
  currency    = serializers.ReadOnlyField()
  attributes  = CartItemAttributeSerializer(read_only=True, many=True)
  class Meta:
    model = CartItem
    exclude = []



class FavourItemSerializer(serializers.ModelSerializer):
  item = ItemDetailSerializer(read_only=True)
  class Meta:
    model = FavourItem
    exclude = []









from django.apps import AppConfig
import watson
from django.utils.html import strip_tags

class ServiceSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return strip_tags(obj.header)
    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_content(self, obj):
        return str(obj.id)
    def get_url(self, obj):
        return "/services"
    def get_meta(self, obj):
        return "service"

class WorkSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return obj.header + " <small>(пример работы)</small>"
    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_content(self, obj):
        return str(obj.id)+','+str(obj.service.id)
    def get_meta(self, obj):
        return "work"

class SecretSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return strip_tags(obj.header)
    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_content(self, obj):
        return str(obj.id)
    def get_meta(self, obj):
        return "secret"


class StaffSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return obj.name + ". " + obj.occupation
    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_content(self, obj):
        return str(obj.id)
    def get_meta(self, obj):
        return "staff"

class AboutSearchAdapter(watson.SearchAdapter):

    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_meta(self, obj):
        return "about"

class IndexSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return strip_tags(obj.header)
    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_content(self, obj):
        return str(obj.logo.url)
    def get_meta(self, obj):
        return "index"

class PromoSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return strip_tags(obj.header)
    def get_description(self, obj):
        return strip_tags(obj.description)
    def get_content(self, obj):
        return str(obj.id)
    def get_meta(self, obj):
        return "promo"

class MainAppConfig(AppConfig):
    name = "main"
    def ready(self):
        Service = self.get_model("Service")
        watson.register(Service, ServiceSearchAdapter)

        Work=self.get_model("Work")
        watson.register(Work, WorkSearchAdapter)

        Secret=self.get_model("Secret")
        watson.register(Secret, SecretSearchAdapter)

        Promo=self.get_model("Promo")
        watson.register(Promo, PromoSearchAdapter)

        About=self.get_model("About")
        watson.register(About, AboutSearchAdapter)

        Staff=self.get_model("Staff")
        watson.register(Staff, StaffSearchAdapter)

        Index=self.get_model("Index")
        watson.register(Index, IndexSearchAdapter)
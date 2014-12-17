from django.apps import AppConfig
import watson

class ServiceSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return obj.header
    def get_description(self, obj):
        return obj.description
    def get_url(self, obj):
        return "../services,ВСЕ УСЛУГИ"

class WorkSearchAdapter(watson.SearchAdapter):

    def get_title(self, obj):
        return obj.header + " <small>(пример работы)</small>"
    def get_description(self, obj):
        return obj.description
    def get_url(self, obj):
        return "../services,ПРОСМОТР"
    def get_meta(self, obj):
        return obj.id

class MainAppConfig(AppConfig):
    name = "main"
    def ready(self):
        Service = self.get_model("Service")
        watson.register(Service, ServiceSearchAdapter)

        Work=self.get_model("Work")
        watson.register(Work, WorkSearchAdapter)
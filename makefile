ifndef container
	container := "web"
endif

db:
	docker-compose exec db psql --username=_django --dbname=mina

check-volume:
	docker volume inspect schedule-service_postgres_data

logs:
	docker-compose logs --tail 50 -f $(container)
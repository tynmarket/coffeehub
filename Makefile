all: deploy

deploy:
	gcloud beta run deploy coffeehub \
		--image gcr.io/tynmarket-195002/github-tynmarket-coffeehub:latest \
		--platform managed \
		--allow-unauthenticated \
		--set-env-vars DB_HOST_COFFEEHUB=$(DB_HOST_COFFEEHUB) \
		--set-env-vars DB_USERNAME=$(DB_USERNAME) \
		--set-env-vars DB_PASSWORD=$(DB_PASSWORD) \
		--set-env-vars GMAIL_USERNAME=$(GMAIL_USERNAME) \
		--set-env-vars GMAIL_PASSWORD=$(GMAIL_PASSWORD) \
		--set-env-vars RAILS_ENV=production \
		--set-env-vars RAILS_LOG_TO_STDOUT=true \
		--set-env-vars RAILS_SERVE_STATIC_FILES=true

deploy-stg:
	gcloud beta run deploy coffeehub-stg \
		--image gcr.io/tynmarket-195002/github-tynmarket-coffeehub-stg:latest \
		--platform managed \
		--allow-unauthenticated \
		--set-env-vars DB_HOST_COFFEEHUB=$(DB_HOST_COFFEEHUB) \
		--set-env-vars DB_USERNAME=$(DB_USERNAME) \
		--set-env-vars DB_PASSWORD=$(DB_PASSWORD) \
		--set-env-vars GMAIL_USERNAME=$(GMAIL_USERNAME) \
		--set-env-vars GMAIL_PASSWORD=$(GMAIL_PASSWORD) \
		--set-env-vars RAILS_ENV=staging \
		--set-env-vars RAILS_LOG_TO_STDOUT=true \
		--set-env-vars RAILS_SERVE_STATIC_FILES=true

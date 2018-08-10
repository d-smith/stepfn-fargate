all: one two

one:
	docker build -f Dockerfile.stepOne -t stepz/sm1-step1-worker .

two:
	docker build -f Dockerfile.stepTwo -t stepz/sm1-step2-worker .

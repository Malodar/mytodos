artsiom:
	echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
	@sudo apt update -y
	@sudo apt install git ansible -y	
	git config --global user.name "Artsiom Kunitsyn"
	git config --global user.email kunitsyn-a-v@yandex.ru
	ansible-playbook artsiom.yml
	

new_install:
	@sudo apt update -y
	@sudo apt install ansible -y
	ansible-galaxy collection install community.general
	ansible-playbook apt.yml
	# ansible-playbook file.yml
	ansible-playbook run.yml
	ansible-playbook db.yml
	

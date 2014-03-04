Vagrant.configure("2") do |config|
    # http://files.vagrantup.com/precise64.box
    config.vm.box = "precise64"
    config.vm.network :private_network, ip: "192.168.111.222"
    config.vm.provision "ansible" do |ansible|
        ansible.playbook = "ansible/playbook.yml"
    end
end


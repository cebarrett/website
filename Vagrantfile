Vagrant.configure("2") do |config|
    config.vm.box = "chef/fedora-20"
    config.vm.network "private_network", ip: "10.10.10.10"
    config.vm.provision "ansible" do |ansible|
        ansible.playbook = "ansible/playbook.yml"
        ansible.extra_vars = {
            ansible_ssh_user: "vagrant"
        }
        ansible.raw_arguments = ['--user', 'vagrant', '--private-key', '~/.vagrant.d/insecure_private_key']
        ansible.raw_ssh_args = ['-o User=vagrant']
        ansible.sudo = true
        ansible.sudo_user = "root"
        ansible.host_key_checking = false
    end
end


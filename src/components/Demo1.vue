<template>
    <div>
        <div class="editor-container">
            <yaml-editor  v-model="value" />
        </div>
    </div>
</template>

<script>
    import YamlEditor from '../components/YamlEditor/Index';

    const yamlData = "- hosts: all\n  become: yes\n  become_method: sudo\n  gather_facts: no\n\n  tasks:\n  - name: \"install {{ package_name }}\"\n    package:\n      name: \"{{ package_name }}\"\n      state: \"{{ state | default('present') }}\"";

    export default {
        name: 'Demo1',
        components: { YamlEditor },
        data() {
            return {
                value: yamlData,
            };
        },
    };
</script>
<style scoped>
    .editor-container{
        position: relative;
        height: 100%;
    }
</style>

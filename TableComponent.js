export default {
    data() {
        return {
            title: 'People',
            headers: ['Item', 'Type', 'Description'],
            rows: [{ item: 'Name', type: 'string', description: "The person's name." }, { item: 'Age', type: 'integer', description: "The person's age." }, { item: 'Name', type: 'string', description: "The person's current residency of city." }, { item: 'State', type: 'string', description: "The person's current residency of state." }, { item: 'Active', type: 'string', description: "Is the person an active participant?" }]
        }
    },
    template: `<table><thead><tr><th :colspan="this.headers.length">
                {{title}}
            </th></tr><tr><th v-for="header in headers">
                {{ header }}
            </th></tr></thead><tbody><tr v-for="row in rows"><td>{{row.item}}</td><td>{{row.type}}</td><td>{{row.description}}</td></tr></tbody></table>`
}
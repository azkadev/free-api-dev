var { createClient } = require("@supabase/supabase-js");
var id = 'qeeracosbsolldghexdo';
var key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODQ2MDI5MCwiZXhwIjoxOTU0MDM2MjkwfQ.HHK0za_juo-Z83XuSj0qVSNdQqgWGl6j5Ux-zB-vbZ8';

class Supabase {
    constructor(id, key) {
        this.client = createClient(`https://${id}.supabase.co`, key);
    }
    async add(from, datas) {
        const { data, error } = await this.client.from(from).insert(datas);
        if (error) {
            throw error;
        }
        return data;
    }
    async delete(from, datas) {
        const { data, error } = await this.client.from(from).delete().match(datas);
        if (error) {
            throw error;
        }
        return data;
    }

    async get(from, dataId, searchData, patern = "") {
        const { data, error } = await this.client.from(from).select();
        if (error) {
            throw error;
        }
        for (var index = 0; index < data.length; index++) {
            var loopData = data[index];
            if (RegExp(searchData, patern ?? "i").exec(loopData[String(dataId)])) {
                return loopData;
            }
        }
        return null;
    }

    async getAll(from) {
        const { data, error } = await this.client.from(from).select();
        if (error) {
            throw error;
        }
        return data;
    }
    async insert(from, datas) {
        const { data, error } = await this.client.from(from).insert(datas);
        if (error) {
            throw error;
        }
        return data;
    }
    async updsert(from, datas) {
        const { data, error } = await this.client.from(from).insert(datas);
        if (error) {
            throw error;
        }
        return data;
    }
    async update(from, dataOrigin, dataUpdate) {
        const { data, error } = await this.client.from(from).update(dataUpdate).match(dataOrigin);
        if (error) {
            throw error;
        }
        return data;
    }
}

async function main() {

    var supabaseId = 'qeeracosbsolldghexdo';
    var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODQ2MDI5MCwiZXhwIjoxOTU0MDM2MjkwfQ.HHK0za_juo-Z83XuSj0qVSNdQqgWGl6j5Ux-zB-vbZ8';
    var sup = new Supabase(supabaseId, supabaseKey); 
    try {
        var searchId = "e21d8fe5a3a9";
        var data = await sup.get("azka", "id", 45);

        console.log(data);
        /*
        var data = await sup.get("azka", "uuid", "264bb65d-8572-420d-a01f-4d8570523cb5");

        console.log(data);
        var low = require("lowdb");
        var FileAsync = require("lowdb/adapters/FileAsync");
        var db =  await low(new FileAsync(`/tmp/${data.uuid}.json`));
        db.defaults(data.array).write();
        db.set("ru", "anjay gays jadi kan mantap").write();
        var getData = db.get("baru").value();
        if (getData){
            db.set("clonebaru", getData).write();
        }
        var get = db.value();
        await sup.update("azka", { id: data.id }, {array: get});
        */
    } catch (e) {
        console.log(e)
    }
}

main();
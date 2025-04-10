export class RestfulAPI 
{
    constructor(web) 
    {
        this.web = web;
    }



    // GET all composers
    get_all() 
    {
        return fetch(this.web)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }



    // GET composer by index
    get(index) 
    {
        return fetch(this.web)
            .then(res => res.json())
            .then(data => {
                if (index >= data.length) throw new Error("Không đủ phần tử");
                console.log(data[index]);
            })
            .catch(err => console.error(err));
    }



    // POST new composer
    post(data) 
    {
        return fetch(this.web, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log("Đã thêm:", result))
        .catch(err => console.error(err));
    }



    // PUT update composer by index
    put(index, data) 
    {
        return fetch(this.web)
            .then(res => res.json())
            .then(items => {
                if (index >= items.length) throw new Error("Không đủ phần tử để cập nhật");
                const id = items[index].id;
                return fetch(`${this.web}/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            })
            .then(res => res.json())
            .then(result => console.log("Đã cập nhật:", result))
            .catch(err => console.error(err));
    }



    // DELETE composer by index
    delete(index) 
    {
        return fetch(this.web)
            .then(res => res.json())
            .then(items => {
                if (index >= items.length) throw new Error("Không đủ phần tử để xóa");
                const id = items[index].id;
                return fetch(`${this.web}/${id}`, { method: 'DELETE' });
            })
            .then(() => console.log(`Đã xóa phần tử ở index = ${index}`))
            .catch(err => console.error(err));
    }
}
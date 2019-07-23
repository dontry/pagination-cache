import api from "./api";

describe('api', () => {

  let total;
  it("should get 'x-total-count' from header", done => {
    api.get("/tickets", {
      perPage: 10,
      sortDirection: 'DESC',
      ticketType: 'incident',
      page: 0
    }).then(response => {
      total = Number(response.headers['x-total-count'])
      expect(total).toBeGreaterThan(0)
      done()
    })
  })


  it("should get 10 items when page=0, perPage=10", (done) => {
    api.get("/tickets", {
      perPage: 10,
      sortDirection: 'DESC',
      ticketType: 'incident',
      page: 0
    }).then(response => {
      expect(response.data.length).toBe(10)
      done()
    })
  })

it("should get 10 items containing serviceData and coreData when page=0, perPage=10", done => {
    api.get("/tickets", {
      perPage: 10,
      sortDirection: 'DESC',
      ticketType: 'incident',
      page: 0
    }).then(response => {
      expect(response.data.every(data => !!data.coreData)).toBeTruthy()
      expect(response.data.every(data => !!data.serviceData)).toBeTruthy()
      done();
    })
  })



   it(`should get no greater than 10 items when page=10  and page is last page`, done => {
      api.get("/tickets", {
        perPage: 10,
        sortDirection: "DESC",
        ticketType: "incident",
        page: Math.floor(total / 10)
      }).then(response => {
        expect(response.data.length).toBe(total %10)
        done();
      })
   })
})

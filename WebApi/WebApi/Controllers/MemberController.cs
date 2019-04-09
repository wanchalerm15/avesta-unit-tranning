using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebDomain.Abstract;
using WebDomain.Entity;

namespace WebApi.Controllers
{
    public class MemberController : ApiController
    {
        private IMember _Member;
        public MemberController(IMember _Member)
        {
            this._Member = _Member;
        }

        public IEnumerable<Member> Get()
        {
            return _Member.Items;
        }

        public Member Get(int id)
        {
            return _Member.Items.Single(m => m.Id == id);
        }

        public IHttpActionResult Post([FromBody] Member value)
        {
            try
            {
                _Member.Create(value);
                return Json(Get(value.Id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(int id, Member value)
        {
            try
            {
                _Member.Update(id, value);
                return Json(Get(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                _Member.Delete(id);
                return Ok("Delete success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
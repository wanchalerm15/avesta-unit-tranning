using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebDomain.Abstract;
using WebDomain.Entity;

namespace WebDomain.Concrete
{
    public class EFMember : IMember
    {
        private readonly Entity.Entity _Entity = new Entity.Entity();

        public IEnumerable<Member> Items => _Entity.Members;

        public void Create(Member value)
        {
            value.Created = DateTime.Now;
            value.Updated = DateTime.Now;
            _Entity.Members.Add(value);
            if (_Entity.SaveChanges() <= 0)
                throw new Exception("Cannot insert item");
        }

        public void Update(int id, Member value)
        {
            var model = Items.FirstOrDefault(m => m.Id == id);
            if (model == null) throw new Exception("Not found item");
            model.Firstname = value.Firstname;
            model.Lastname = value.Lastname;
            model.Old = value.Old;
            model.Updated = DateTime.Now;
            if (_Entity.SaveChanges() <= 0) throw new Exception("Cannot update item");
        }

        public void Delete(int id)
        {
            var model = Items.FirstOrDefault(m => m.Id == id);
            if (model == null) throw new Exception("Not found item");
            _Entity.Members.Remove(model);
            if (_Entity.SaveChanges() <= 0) throw new Exception("Cannot delete item");
        }
    }
}

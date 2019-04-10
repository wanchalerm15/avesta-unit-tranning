using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Controllers;
using WebDomain.Abstract;
using WebDomain.Entity;

namespace WebApi.Tests.Controllers
{
    [Microsoft.VisualStudio.TestTools.UnitTesting.TestClass]
    public class MemberControllerTest
    {
        public List<Member> FakeMember = new List<Member>
        {
            new Member{ Id = 1, Firstname = "First 1", Lastname = "Last 1", Old = 1, Created = DateTime.Now, Updated = DateTime.Now },
            new Member{ Id = 2, Firstname = "First 2", Lastname = "Last 2", Old = 2, Created = DateTime.Now, Updated = DateTime.Now },
            new Member{ Id = 3, Firstname = "First 3", Lastname = "Last 3", Old = 3, Created = DateTime.Now, Updated = DateTime.Now },
        };

        [TestMethod]
        public void Get()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMember);
            var controller = new MemberController(mock.Object);

            Assert.AreEqual(3, controller.Get().Count());
            Assert.AreEqual("First 3", controller.Get().ToList()[2].Firstname);
        }

        [TestMethod]
        public void GetById()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMember);
            var controller = new MemberController(mock.Object);
            var idTesting = 3;
            var result = controller.Get(idTesting);

            Assert.AreEqual("First 3", result.Firstname);
            Assert.AreEqual("Last 3", result.Lastname);
            Assert.AreEqual(3, result.Old);
        }

        [TestMethod]
        public void Post()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMember);

            mock.Setup(m => m.Create(It.IsAny<Member>())).Callback((Member model) =>
            {
                model.Id = 4;
                model.Created = DateTime.Now;
                model.Updated = DateTime.Now;
                FakeMember.Add(model);
            });

            var controller = new MemberController(mock.Object);
            var value = new Member
            {
                Firstname = "Add First",
                Lastname = "Add Last",
                Old = 400
            };

            var result = controller.Post(value);

            Assert.AreEqual(4, controller.Get().Count());
            Assert.AreEqual("Add First", controller.Get(4).Firstname);
            Assert.AreEqual("Add Last", controller.Get(4).Lastname);
            Assert.AreEqual(400, controller.Get(4).Old);
        }

        [TestMethod]
        public void Put()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMember);
            mock.Setup(m => m.Update(It.IsAny<int>(), It.IsAny<Member>())).Callback((int id, Member member) =>
            {
                var updateModel = FakeMember.Single(m => m.Id == id);
                updateModel.Firstname = member.Firstname;
                updateModel.Lastname = member.Lastname;
                updateModel.Old = member.Old;
                updateModel.Updated = DateTime.Now;
            });

            var controller = new MemberController(mock.Object);
            var value = new Member
            {
                Firstname = "Update Firstname",
                Lastname = "Update Lastname",
                Old = 400
            };

            controller.Put(3, value);
            Assert.AreEqual("Update Firstname", controller.Get(3).Firstname);
            Assert.AreEqual("Update Lastname", controller.Get(3).Lastname);
            Assert.AreEqual(400, controller.Get(3).Old);
        }

        [TestMethod]
        public void Delete()
        {
            var mock = new Mock<IMember>();
            mock.Setup(m => m.Items).Returns(FakeMember);
            mock.Setup(m => m.Delete(It.IsAny<int>())).Callback((int id) =>
            {
                var deleteModel = FakeMember.Single(m => m.Id == id);
                FakeMember.Remove(deleteModel);
            });

            var controller = new MemberController(mock.Object);
            controller.Delete(3);

            Assert.AreEqual(2, controller.Get().Count());
        }

    }
}

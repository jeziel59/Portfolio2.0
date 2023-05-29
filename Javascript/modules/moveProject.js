export default class moveProject {
  constructor(project, content) {
    this.project = document.querySelectorAll(project);
    this.content = document.querySelectorAll(content);
    this.classActive = "activeTab";
    this.event = ["touchstart", "mousemove"];
    this.activeTab = this.activeTab.bind(this);
  }
  activeTab(event) {
    const element = event.currentTarget;
    this.project.forEach((item) => {
      item.classList.remove(this.classActive);
      item.nextElementSibling.classList.remove(this.classActive);
    })
    element.classList.add(this.classActive);
    element.nextElementSibling.classList.add(this.classActive);
  }
  addEventActiveTab() {
    this.project.forEach((element) => {
      this.event.forEach((userEvent) => {
        element.addEventListener(userEvent, this.activeTab);
      });
    });
  }
  init() {
    this.addEventActiveTab();
  }
}

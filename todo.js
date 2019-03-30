const todo = {
  todos: [],

  init() {
    if (localStorage.getItem('todos') !== null) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  },

  render() {
    const rootEl = document.getElementById('todoList')

    const todoItems = rootEl.querySelectorAll('.todo-item')

    console.log(todoItems)

    rootEl.innerHTML = ''

    const children = this.todos.map(this.renderTodo.bind(this))

    children.forEach(function (child) {
      rootEl.appendChild(child)
    })
  },

  renderTodo(todo, index) {
    const el = document.createElement('li')
    const button = document.createElement('button')
    button.className = 'fas fa-minus-circle';
    button.style.background = "purple";
    button.style.color = "white";
    button.setAttribute('data-index', index)
    button.onclick = this.remove.bind(this)


    el.classList.add('todo-item')

    el.appendChild(button)
    el.appendChild(document.createTextNode(todo))

    return el
  },

  /**
   *
   * @param {KeyboardEvent} e
   */
  add(e) {
    if (e.key !== 'Enter' || e.keyCode !== 13) return

    const value = e.target.value.trim()

    if (value == '') {
      alert('Please enter a Todo!.')
      return
    }

    this.todos.push(value)

    e.target.value = ''

    this.render()
    this.save()
  },

  edit() {
    // TODO
  },

  /**
   *
   * @param {MouseEvent} e
   */
  remove(e) {
    this.todos.splice(e.target.getAttribute('data-index'), 1)
    this.render()
    this.save()
  },

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  },
}

/**
 * 
 * @param {MouseEvent} 
 */
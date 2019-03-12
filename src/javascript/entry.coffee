import $ from 'jquery'
import 'jquery-mousewheel'
import marked from 'marked'

addColor = (color) ->
  $('.content')
    .removeClass()
    .addClass('content')
    .addClass(color)

$('.menu').on 'click', ->
  $(this).toggleClass 'active'

$(document).on 'click', (e)->
  if !$(e.target).closest('.menu').length
    $('.menu').removeClass('active')

storage = sessionStorage

$('[name=color]').on 'click', ->
  color = this.value
  addColor color
  storage.setItem('color', color)

$('.novel-text').on 'keyup', ->
  html = marked this.value
  $('.novel-html').html html
  storage.setItem('text', this.value)

color = storage.getItem('color') || 'white'
addColor color
$("\#col-#{color}").attr('checked', 'checked')
$('.novel-text').val(storage.getItem('text'))
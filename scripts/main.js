"use strict";
! function () {
  window.signatures = {
    init: function () {
      this.liveForm(), this.clipboard()
    },
    updateField: function (i) {
      var e = $("#" + i).val(),
        n = document.querySelectorAll(".signature-row ." + i),
        t = document.querySelectorAll(".signature-row ." + i + "-link");
      if (n && t)
        for (var a = 0; a < n.length; a++) e.length > 0 ? (n[a].innerText = e, "email" == i ? t[a].setAttribute("href", "mailto:" + e) : t[a].setAttribute("href", "tel:" + e)) : n[a].innerText = ""
    },
    liveForm: function () {
      $(".signature-form input").keyup(function () {
        var i = $(this).attr("id"),
          e = $(this).val();
        "email" == i ? window.signatures.updateField("email") : $(".signature ." + i + ",.reply-signature ." + i).text(e)
      }), $(".signature-form input").blur(function () {
        var i = $(this).attr("id"),
          e = $(this).val();
        e.length > 0 && ("email" == i ? window.signatures.updateField("email") : $(".signature ." + i + ",.reply-signature ." + i).text(e))
      });
      new Cleave("#office", {
        delimiter: "-",
        blocks: [3, 3, 4],
        numericOnly: !0,
        onValueChanged: function (i) {
          window.signatures.updateField("office")
        }
      })
      new Cleave("#cell", {
        delimiter: "-",
        blocks: [3, 3, 4],
        numericOnly: !0,
        onValueChanged: function (i) {
          window.signatures.updateField("cell")
        }
      })
    },
    clipboard: function () {
      ClipboardJS.isSupported() || ($(".no-clip").css("display", "block"), $(".yes-clip").css("display", "none")), new ClipboardJS(".btn.copy")
    },
    toggleSignatureVersion: function () {
      var i = "pc",
        e = $(".pc-version-button"),
        n = $(".mac-version-button"),
        t = $(".pc-version-copy"),
        a = $(".mac-version-copy");
      e.click(function () {
        "pc" !== i && (a.css("display", "none"), t.css("display", "block"), i = "pc", e.addClass("active"), n.removeClass("active"))
      }), n.click(function () {
        "mac" !== i && (a.css("display", "block"), t.css("display", "none"), i = "mac", e.removeClass("active"), n.addClass("active"))
      })
    }
  }, $(window.document).ready(function () {
    window.signatures.init()
  })
}();